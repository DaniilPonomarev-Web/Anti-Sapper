import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'http';
import { GameService } from './game.service';
import { InputJoinGameDTO } from './dto/join-game.dto';
import { InputOpenCellDTO } from './dto/open-cell.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class GameGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly gameService: GameService) {}

  @SubscribeMessage('joinGame')
  async handleJoinGame(
    @MessageBody() payload: InputJoinGameDTO,
  ): Promise<void> {
    await this.gameService.joinGame(payload.gameId, payload.playerId);
    const game = await this.gameService.getOneGame(payload.gameId);
    this.server.emit('gameUpdated', game);
  }

  @SubscribeMessage('openCell')
  async handleOpenCell(
    @MessageBody() payload: InputOpenCellDTO,
  ): Promise<void> {
    const result = await this.gameService.openCell(
      payload.gameId,
      payload.playerId,
      payload.x,
      payload.y,
    );

    const game = await this.gameService.getOneGame(payload.gameId);
    this.server.emit('gameUpdated', game);
    this.server.emit('cellOpened', result);
  }

  // TODO Сделать чтобы когда игрок выходил, его удаляло из игры текущей
}
