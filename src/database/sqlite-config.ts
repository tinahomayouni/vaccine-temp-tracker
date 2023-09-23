// src/database/database.module.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const config = {
  type: 'sqlite',
  database: 'src/database/sqlite.db', // Verify the path
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
} satisfies TypeOrmModuleOptions;

export const connectionSource = new DataSource(config);
