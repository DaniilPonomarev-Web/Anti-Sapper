import { IGame } from './game.interface';

export interface IPlayer {
  id: string; // id
  //TODO :PlayerNameType - type PlayerNameType = 'Игрок 1' | 'Игрок 2'; Если имена игроков не будут задаваться в игре
  name: string; // имя игрока
  diamondsCollected: number; // кол-во алмазов собрано
  game: IGame; // игра
}
