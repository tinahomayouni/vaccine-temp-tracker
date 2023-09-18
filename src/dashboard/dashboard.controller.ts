import { Controller, Get, Render } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Render('dashboard')
  async getDashboardView() {
    const temperatures = await this.dashboardService.getRecentReadings();
    console.log('show 5 records in temperature table ');
    return { temperatures };
  }

  @Get('temperatures')
  async getDashboard() {
    const temperatures = await this.dashboardService.getRecentReadings();
    console.log('show 5 records in temperature table ');
    return { temperatures };
  }

  @Get('alarms')
  async getAlarms() {
    const temperatures = await this.dashboardService.getAlarms();
    console.log('show 5 records in temperature table ');
    return { temperatures };
  }
}
