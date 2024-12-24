import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { InputCreateGameDTO } from './dto/create-game.dto';

export function IsOdd(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsOdd',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'number' && value % 2 !== 0;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Число должно быть нечетным!';
        },
      },
    });
  };
}

export function IsSizeSufficient(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsSizeSufficient',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: number, args: ValidationArguments) {
          const object = args.object as InputCreateGameDTO;
          return object.size * object.size >= value;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Размер поля должен быть достаточным для размещения всех алмазов.';
        },
      },
    });
  };
}
