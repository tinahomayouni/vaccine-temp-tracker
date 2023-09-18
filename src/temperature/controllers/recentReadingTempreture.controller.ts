import { Controller, Get } from '@nestjs/common';
import { RecentReadingTemperatureService } from 'src/temperature/services/recentReadingTempreture.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly recentReadingTemperatureService: RecentReadingTemperatureService,
  ) {}

  @Get()
  async getDashboardData() {
    const recentReadings =
      this.recentReadingTemperatureService.getRecentReadings();
    // You can also implement logic to fetch alerts here if needed
    return {
      recentReadings,
      alerts: [], // Implement alert logic here
    };
  }
}
