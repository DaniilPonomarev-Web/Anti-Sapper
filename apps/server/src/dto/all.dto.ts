//TODO раскинуть по файлам

export class GameDto {
  id: number;
  size: number;
  diamondsCount: number;
  diamonds: DiamondDto[];
  players: PlayerDto[];
}

export class DiamondDto {
  id: number;
  x: number;
  y: number;
}

export class PlayerDto {
  id: number;
  name: string;
  diamondsCollected: number;
}
