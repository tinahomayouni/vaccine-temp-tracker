import { Controller, Get, Render, Res } from '@nestjs/common';
import { RecentReadingTemperatureService } from '../services/recentReadingTempreture.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly recentReadingTemperatureService: RecentReadingTemperatureService,
  ) {}

  @Get()
  async getDashboard(@Res() res) {
    const recentReadings =
      await this.recentReadingTemperatureService.getRecentReadings();
    const dashboardUrl = '/dashboard'; // Replace with the actual URL

    res.render('dashboard', { dashboard: dashboardUrl, recentReadings });
  }
}
