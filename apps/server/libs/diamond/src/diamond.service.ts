import { DiamondEntity } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiamondService {
  constructor(
    @InjectRepository(DiamondEntity)
    private diamondRepository: Repository<DiamondEntity>,
  ) {}
  //TODO Interface payload
  // Добавлена уникальность, чтобы они по разным ячейкам были
  async generateRandomCoordinatesDiamonds(
    size: number,
    diamondsCount: number,
  ): Promise<DiamondEntity[]> {
    const diamonds: DiamondEntity[] = [];
    const usedCoordinates = new Set<string>();

    while (diamonds.length < diamondsCount) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      const coordKey = `${x},${y}`;

      if (!usedCoordinates.has(coordKey)) {
        const diamond = new DiamondEntity();
        diamond.x = x;
        diamond.y = y;

        diamonds.push(diamond);
        usedCoordinates.add(coordKey);
      }
    }
    return this.diamondRepository.save(diamonds);
  }
}
