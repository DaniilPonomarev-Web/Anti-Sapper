import { IsInt, IsPositive, IsUUID, Max, Min } from 'class-validator';
import { IsOdd, IsSizeSufficient } from 'src/validator';

export class InputCreateGameDTO {
  //TODO implements IInputCreateGame
  @IsInt({
    message: 'Введите число!',
  })
  @IsPositive({
    message: 'Введите положительное число',
  })
  @Min(1, {
    message: 'Минимальное число 1',
  })
  @Max(6, {
    message: 'Максмальное число 6',
  })
  size: number;

  @IsInt({
    message: 'Введите число!',
  })
  @IsPositive({
    message: 'Введите положительное число',
  })
  @Min(1, {
    message: 'Минимальное число 1',
  })
  @Max(36, {
    message: 'Максмальное число 36',
  })
  @IsOdd({
    message: 'Число должно быть нечетным!',
  })
  @IsSizeSufficient({
    message: 'Размер поля должен быть достаточным для размещения всех алмазов.',
  })
  diamonds: number;

  @IsUUID()
  playerId: string;
}
