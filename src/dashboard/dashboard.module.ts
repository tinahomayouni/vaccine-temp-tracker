// src/dashboard/dashboard.module.ts or the relevant module

import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { TemperatureModule } from '../temperature/temperature.module';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [TemperatureModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
