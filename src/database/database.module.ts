// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './sqlite-config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
})
export class DatabaseModule {}
