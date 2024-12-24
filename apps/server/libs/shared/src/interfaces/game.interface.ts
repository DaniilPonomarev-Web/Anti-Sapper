import { IDiamond } from './diamond.interface';
import { IPlayer } from './player.interface';

export interface ICellCoordinates {
  x: number;
  y: number;
}
export type CellCoordinatesArray = ICellCoordinates[];

export interface IGame {
  id: number; //id
  size: number; //размер х2
  diamondsCount: number; //количество алмазиков
  currentPlayerId: string; //id игрока который ходит
  players: IPlayer[]; //игроки в игре
  diamonds: IDiamond[]; //местоположение и id алмазов
  openedCells: CellCoordinatesArray; //открытые ячейки //TODO этот тип везде использовать и вынести в отдельный файл coordinates
}
