// src/dashboard/dashboard.controller.ts

import { Controller, Get, Render } from '@nestjs/common';
import { RecentReadingTemperatureService } from '../services/recentReadingTempreture.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly recentReadingTemperatureService: RecentReadingTemperatureService,
  ) {}

  @Get()
  @Render('dashboard') // Specify the name of your HTML template (e.g., dashboard.ejs)
  async getDashboard() {
    const recentReadings =
      await this.recentReadingTemperatureService.getRecentReadings();
    return { recentReadings };
  }
}
