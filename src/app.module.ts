// src/app.module.ts

import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { TemperatureModule } from './temperature/temperature.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DashboardModule, TemperatureModule, DatabaseModule],
})
export class AppModule {}
