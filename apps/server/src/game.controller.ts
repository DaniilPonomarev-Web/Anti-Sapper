import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { GameService } from './game.service';
import { InputCreateGameDTO } from './dto/create-game.dto';
import { IGame } from '@app/shared';
// import { InputJoinGameDTO } from './dto/join-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createGame(@Body() payload: InputCreateGameDTO): Promise<IGame> {
    const data = await this.gameService.createGame(payload);
    return data;
  }

  @Get(':gameId')
  async getGame(@Param('gameId') gameId: number): Promise<IGame> {
    return await this.gameService.getOneGame(gameId);
  }

  // import { OpenCellResultType } from './interface/results-game.interface';
  // import { InputOpenCellDTO } from './dto/open-cell.dto';
  // @Post('join')
  // async joinGame(@Body() payload: InputJoinGameDTO): Promise<string> {
  //   const result = await this.gameService.joinGame(
  //     payload.gameId,
  //     payload.playerId,
  //   );
  //   return result;
  // }
  // @Post(':gameId/open')
  // @UsePipes(new ValidationPipe())
  // async openCell(
  //   @Param('gameId') gameId: number,
  //   @Body() openCellDTO: InputOpenCellDTO,
  // ): Promise<OpenCellResultType> {
  //   const { playerId, x, y } = openCellDTO;
  //   return await this.gameService.openCell(gameId, playerId, x, y);
  // } //TODO удалить для тестов
}
