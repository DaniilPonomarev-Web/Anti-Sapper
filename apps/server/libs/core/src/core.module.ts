import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions, getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          entities: getMetadataArgsStorage().tables.map((tbl) => {
            return tbl.target;
          }),
        }),
    }),
  ],
})
export class CoreModule {}
