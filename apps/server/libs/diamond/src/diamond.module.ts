import { Module } from '@nestjs/common';
import { DiamondService } from './diamond.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiamondEntity } from '@app/shared';

@Module({
  imports: [TypeOrmModule.forFeature([DiamondEntity])],
  providers: [DiamondService],
  exports: [DiamondService],
})
export class DiamondModule {}
