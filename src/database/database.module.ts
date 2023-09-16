// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Set the database type to SQLite
      database: 'database/sqlite.db', // Provide the path to your SQLite database file
      synchronize: true, // Auto-create database schema (for development only)
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Entity files location
    }),
  ],
})
export class DatabaseModule {}
