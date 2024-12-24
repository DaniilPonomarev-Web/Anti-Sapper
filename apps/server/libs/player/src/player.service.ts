import { IGame, IPlayer, PlayerEntity } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
  ) {}

  async createPlayerForGame(
    game: IGame,
    playerId: string,
  ): Promise<PlayerEntity> {
    const player = new PlayerEntity();
    player.id = playerId;
    console.warn(game);

    player.name = `Игрок ${game.players?.length ? game.players.length + 1 : 1}`;

    player.diamondsCollected = 0; // TODO Просто сделать default: 0
    const newPlayer = await this.playerRepository.save(player);
    return newPlayer;
  }

  async savePlayer(player: IPlayer): Promise<IPlayer> {
    return await this.playerRepository.save(player);
  }

  //TODO удалить было нужно для проверки игрока, но записал в GAME
  // private async getPlayerById(playerId: number): Promise<IPlayer> {
  //   const player = await this.playerRepository.findOne({
  //     where: { id: playerId },
  //   });
  //   if (!player) {
  //     return null;
  //   }
  //   return player;
  // }
}
