import { IGame } from './game.interface';

export interface IDiamond {
  id: number; // id
  x: number; // ось x
  y: number; // ось y
  game: IGame; // игра
}
