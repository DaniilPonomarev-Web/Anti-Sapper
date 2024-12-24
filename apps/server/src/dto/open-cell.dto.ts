import { IsInt, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class InputOpenCellDTO {
  @IsInt({ message: 'Введите целое число!' })
  @IsNumber()
  @IsNotEmpty({ message: 'Id игры' })
  gameId: number;

  @IsUUID()
  @IsNotEmpty({ message: 'Кто сходил' })
  playerId: string;

  @IsInt({ message: 'Введите целое число!' })
  @IsNumber()
  @IsNotEmpty({ message: 'Такой клетки нет!' })
  x: number;

  @IsInt({ message: 'Введите целое число!' })
  @IsNumber()
  @IsNotEmpty({ message: 'Такой клетки нет!' })
  y: number;
}
