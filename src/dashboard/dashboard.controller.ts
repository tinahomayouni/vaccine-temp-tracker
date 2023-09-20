import { Controller, Get, Render } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('dashboard1') // Specify the tag for this controller
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get() //http://localhost:3000/api
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
