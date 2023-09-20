// src/app.module.ts

import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { TemperatureLogModule } from './temperature-logs/modules/temperature-log.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DashboardModule, TemperatureLogModule, DatabaseModule],
})
export class AppModule {}
