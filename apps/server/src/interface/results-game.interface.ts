export interface INumberResult {
  result: 'number';
  value: number;
}

export interface IDiamondResult {
  result: 'diamond';
  player: string;
}

export interface IGameOverResult {
  result: 'game_over';
  winner: string;
}

export type OpenCellResultType =
  | INumberResult
  | IDiamondResult
  | IGameOverResult;
