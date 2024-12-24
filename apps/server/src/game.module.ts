import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from '@app/player';
import { DiamondModule } from '@app/diamond';
import { CoreModule } from '@app/core';
import { GameEntity } from '@app/shared';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameGateway } from './game.gateway';

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => configuration],
      validationSchema: validationSchema,
    }),
    TypeOrmModule.forFeature([GameEntity]),
    PlayerModule,
    DiamondModule,
  ],
  controllers: [GameController],
  providers: [GameService, GameGateway],
})
export class GameModule {}
