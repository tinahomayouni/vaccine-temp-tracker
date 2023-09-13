import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get()
  async getDashboard() {
    // Implement logic to fetch and display dashboard data
    return `<B>Ollllla Dashboard!</B>`;
  }
}
