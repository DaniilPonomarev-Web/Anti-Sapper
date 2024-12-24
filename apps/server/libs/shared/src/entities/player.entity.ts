import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { IPlayer } from '../interfaces/player.interface';
import { GameEntity } from './game.entity';

@Entity('player')
export class PlayerEntity implements IPlayer {
  @PrimaryColumn({ type: 'uuid', comment: 'ИД игрока' })
  id: string;

  @Column({ comment: 'имя игрока' })
  name: string;

  @Column({ default: 0, comment: 'кол-во собранных алмазов' })
  diamondsCollected: number;

  @ManyToOne(() => GameEntity, (game) => game.players, { onDelete: 'CASCADE' })
  game: GameEntity;
}
