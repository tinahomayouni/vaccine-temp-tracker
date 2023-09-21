import { Injectable } from '@nestjs/common';
import { TemperatureLogService } from 'src/temperature-logs/services/temperature-log.service';

@Injectable()
export class DashboardService {
  constructor(private readonly temperatureService: TemperatureLogService) {}

  async getRecentReadings() {
    const temperatures = await this.temperatureService.findAllTemperatures();
    return temperatures.slice(-5);
  }

  async getAlarms() {
    const temperatures = await this.temperatureService.findAllTemperatures();
    return temperatures.filter((t) => t.celsius < 2 || t.celsius > 8).slice(-5);
  }
}
