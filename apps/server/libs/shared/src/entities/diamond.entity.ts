import { IDiamond } from '@app/shared';
import { GameEntity } from '@app/shared';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('diamond')
export class DiamondEntity implements IDiamond {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: 'координаты алмаза по X' })
  x: number;

  @Column({ comment: 'координаты алмаза по Y' })
  y: number;

  @ManyToOne(() => GameEntity, (game) => game.diamonds, { onDelete: 'CASCADE' })
  game: GameEntity;
}
