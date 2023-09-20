// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/sqlite.db', // Verify the path
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
})
export class DatabaseModule {}
