// src/dashboard/dashboard.module.ts or the relevant module

import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { TemperatureLogModule } from 'src/temperature-logs/modules/temperature-log.module';

@Module({
  imports: [TemperatureLogModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
