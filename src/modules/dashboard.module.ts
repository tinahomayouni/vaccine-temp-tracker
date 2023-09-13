// src/dashboard/dashboard.module.ts or the relevant module

import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/dashboard.controller';
import { RecentReadingTemperatureService } from '../services/recentReadingTempreture.service'; // Import the service

@Module({
  controllers: [DashboardController],
  providers: [RecentReadingTemperatureService], // Include the service in providers
})
export class DashboardModule {}
