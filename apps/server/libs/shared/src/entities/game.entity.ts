import { DiamondEntity, IGame, PlayerEntity } from '@app/shared';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('game')
export class GameEntity implements IGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: 'размер поля х2' })
  size: number;

  @Column({ comment: 'кол-во алмазов' })
  diamondsCount: number;

  @Column({ nullable: true })
  currentPlayerId: string;

  @OneToMany(() => PlayerEntity, (player) => player.game, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  players: PlayerEntity[];

  @OneToMany(() => DiamondEntity, (diamond) => diamond.game, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  diamonds: DiamondEntity[];

  @Column('jsonb', {
    default: [],
    comment: 'открытые клетки (координаты x и y)',
  })
  openedCells: { x: number; y: number }[];
}
