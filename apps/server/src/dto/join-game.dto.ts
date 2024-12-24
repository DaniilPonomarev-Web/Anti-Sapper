import { IsInt, IsNumber, IsUUID } from 'class-validator';

export class InputJoinGameDTO {
  @IsInt()
  @IsNumber()
  gameId: number;

  @IsUUID()
  playerId: string;
}
