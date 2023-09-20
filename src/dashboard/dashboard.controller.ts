import { Controller, Get, Render } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Render('dashboard')
  async getDashboardView() {
    const temperatures = await this.dashboardService.getRecentReadings();
    return { temperatures };
  }

  @Get('alarms')
  async getAlarms() {
    const temperatures = await this.dashboardService.getAlarms();
    return { temperatures };
  }
}
