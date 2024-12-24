import { GameEntity } from '../entities';

export async function countAdjacentDiamonds(
  game: GameEntity,
  x: number,
  y: number,
): Promise<number> {
  // Проверка, чтобы соседние координаты не выходили за пределы поля
  // TODO откорректировать логику, непонятно работает оно или нет
  const isInBounds = (x: number, y: number) =>
    x >= 0 && x < game.size && y >= 0 && y < game.size;

  // Массив направлений для проверки соседей
  // dx - изменение координаты x
  // dy - изменение координаты y
  // Если нужно проверить вертикальных и горизонтальных соседей -  оставить только {dx: -1, dy: 0}, {dx: 0, dy: -1} и т.д.
  const directions = [
    { dx: -1, dy: 0 }, // Север
    { dx: -1, dy: -1 }, // Северо-запад
    { dx: -1, dy: 1 }, // Северо-восток
    { dx: 0, dy: -1 }, // Запад
    { dx: 0, dy: 1 }, // Восток
    { dx: 1, dy: -1 }, // Юго-запад
    { dx: 1, dy: 0 }, // Юг
    { dx: 1, dy: 1 }, // Юго-восток
  ];
  // Направление	  dx	dy	Соседние координаты x.y
  // Северо-запад	  -1	-1	(1, 1)
  // Север	        -1	 0	(1, 2)
  // Северо-восток	-1	 1	(1, 3)
  // Запад	         0	-1	(2, 1)
  // Восток	         0	 1	(2, 3)
  // Юго-запад	     1	-1	(3, 1)
  // Юг	             1	 0	(3, 2)
  // Юго-восток	     1	 1	(3, 3)

  const diamondSet = new Set(
    game.diamonds.map((diamond) => `${diamond.x},${diamond.y}`),
  );

  // Подсчёт соседних алмазов
  return directions.reduce((count, { dx, dy }) => {
    const neighborX = x + dx;
    const neighborY = y + dy;
    // в пределах ли поле, и есть ли алмаз в этой клетке
    if (
      isInBounds(neighborX, neighborY) &&
      diamondSet.has(`${neighborX},${neighborY}`)
    ) {
      count += 1;
    }
    return count;
  }, 0);
}
