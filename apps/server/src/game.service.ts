import { DiamondService } from '@app/diamond';
import { PlayerService } from '@app/player';
import {
  countAdjacentDiamonds,
  GameEntity,
  // IDiamond,
  IGame,
  IPlayer,
} from '@app/shared';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpenCellResultType } from './interface/results-game.interface';
import { InputCreateGameDTO } from './dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    private readonly playerService: PlayerService,
    private readonly diamondService: DiamondService,
  ) {}

  async getOneGame(gameId: number): Promise<GameEntity> {
    const game = await this.gameRepository.findOne({
      where: { id: gameId },
      relations: ['diamonds', 'players'],
    });

    if (!game) {
      throw new HttpException(
        'Игра не найдена, начните новую',
        HttpStatus.NOT_FOUND,
      );
    }
    return game;
  }

  //TODO:
  // 1. Перевести операции создания игры, алмазов и игроков в транзакцию для обеспечения атомарности(научился).
  // 2. Сохранять промежуточные данные (например, алмазы и игроков) только в случае успешного создания игры. Если произошла ошибка, необходимо откатить изменения.
  // 3. Устранить переопределение переменной `diamonds` — использовать уникальные названия для переменных.
  // 4. Улучшить обработку ошибок: логировать больше информации для диагностики.
  async createGame(payload: InputCreateGameDTO): Promise<IGame> {
    const game = new GameEntity();
    game.size = payload.size;
    game.diamondsCount = payload.diamonds;
    game.currentPlayerId = payload.playerId;

    //TODO: Обернуть процесс в транзакцию для обеспечения атомарности )
    try {
      const generatedDiamonds =
        await this.diamondService.generateRandomCoordinatesDiamonds(
          payload.size,
          payload.diamonds,
        );
      game.diamonds = generatedDiamonds;

      const creatorPlayer = await this.playerService.createPlayerForGame(
        game,
        payload.playerId,
      );
      game.players = [creatorPlayer];

      game.players = [];
      const savedGame = await this.gameRepository.save(game);
      return savedGame;
    } catch (error) {
      console.log(error);
      //TODO: Удалить промежуточные данные если они были созданы
      throw new HttpException('Ошибка создания игры', HttpStatus.NOT_FOUND);
    }
  }

  async joinGame(gameId: number, playerId: string): Promise<string> {
    const game = await this.getOneGame(gameId);

    if (game.players.length >= 2) {
      throw new HttpException('В игре уже два игрока!', HttpStatus.BAD_REQUEST);
    }

    if (game.players.some((player) => player.id === playerId)) {
      // console.log(`Игрок с ID ${playerId} уже подключён к игре ${gameId}`);
      return `Игрок с ID ${playerId} уже подключён к игре ${gameId}`;
    }

    // Создаём нового игрока
    const player = await this.playerService.createPlayerForGame(game, playerId);
    game.players.push(player);

    await this.gameRepository.save(game);
    return `Игрок с ID ${playerId} успешно подключился к игре с ID ${gameId}`;
  }

  async openCell<T extends OpenCellResultType>(
    gameId: number,
    playerId: string,
    x: number,
    y: number,
  ): Promise<T> {
    const game = await this.getAndValidateGame(gameId);

    if (game.players && game.players.length < 2) {
      throw new HttpException('Дождитесь второго игрока', HttpStatus.NOT_FOUND);
    }
    const player = await this.getAndValidatePlayer(game, playerId);
    await this.validateCellNotOpened(game, x, y);

    // есть ли алмаз на этих координатах ?
    const diamond = game.diamonds.find((d) => d.x === x && d.y === y);

    // клетку пушим в список открытых
    await this.addOpenedCell(game, x, y);

    if (diamond) {
      player.diamondsCollected += 1;
      await this.playerService.savePlayer(player);

      // найдены ли все алмазы ?
      const totalCollected = game.players.reduce(
        (sum, p) => sum + p.diamondsCollected,
        0,
      );

      if (totalCollected === game.diamondsCount) {
        const winner = game.players.sort(
          (a, b) => b.diamondsCollected - a.diamondsCollected,
        )[0];
        const gameResult = { result: 'game_over', winner: winner.name } as T;

        setTimeout(async () => {
          try {
            await this.gameRepository.delete(game.id);
          } catch (error) {
            console.error(`Ошибка при удалении игры с ID ${game.id}:`, error);
          }
        }, 0);

        return gameResult;
      }

      return { result: 'diamond', player: player.id } as T;
    }
    // Если клетка не содержит алмаз, показываем число соседних алмазов
    const adjacentDiamonds = await countAdjacentDiamonds(game, x, y);

    await this.switchTurn(game);

    return { result: 'number', value: adjacentDiamonds } as T;
  }

  // Есть ли игра
  private async getAndValidateGame(gameId: number): Promise<GameEntity> {
    const game = await this.getOneGame(gameId);
    if (!game) {
      throw new HttpException('Такая игра не найдена', HttpStatus.NOT_FOUND);
    }
    return game;
  }

  // Есть ли игрок и его ли ход
  private async getAndValidatePlayer(
    game: GameEntity,
    playerId: string,
  ): Promise<IPlayer> {
    const player = game.players.find((p) => p.id === playerId);
    if (game.currentPlayerId !== playerId) {
      throw new HttpException('НЕ ТВОЙ ХОД!', HttpStatus.NOT_FOUND);
    }
    if (!player) {
      throw new HttpException('Игрок не найден', HttpStatus.NOT_FOUND);
    }
    return player;
  }

  // Проверяет, открыта ли ячейка
  private async validateCellNotOpened(
    game: GameEntity,
    x: number,
    y: number,
  ): Promise<void> {
    if (game.openedCells.some((cell) => cell.x === x && cell.y === y)) {
      throw new HttpException('Клетка уже открыта', HttpStatus.NOT_FOUND);
    }
  }

  // Пушим клетку в игру
  private async addOpenedCell(
    game: GameEntity,
    x: number,
    y: number,
  ): Promise<void> {
    game.openedCells.push({ x, y });
    await this.gameRepository.save(game);
  }

  // выбор другого игрока смена текущего
  private async switchTurn(game: GameEntity): Promise<void> {
    const currentPlayerIndex = game.players.findIndex(
      (p) => p.id === game.currentPlayerId,
    );
    const nextPlayerIndex = (currentPlayerIndex + 1) % game.players.length;
    game.currentPlayerId = game.players[nextPlayerIndex].id;
    await this.gameRepository.save(game);
  }

  // // Алмаз в клетке ??
  // private async getDiamondAt(
  //   game: GameEntity,
  //   x: number,
  //   y: number,
  // ): Promise<IDiamond | undefined> {
  //   return game.diamonds.find((d) => d.x === x && d.y === y);
  // }
}
