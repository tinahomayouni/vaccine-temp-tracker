import { Injectable } from '@nestjs/common';
import { TemperatureService } from 'src/temperature/services/temperature.service';

@Injectable()
export class DashboardService {
  constructor(private readonly temperatureService: TemperatureService) {}

  async getRecentReadings() {
    return (await this.temperatureService.findAllTemperatures()).slice(-5);
  }

  async getAlarms() {
    return (await this.temperatureService.findAllTemperatures())
      .filter((t) => t.value < 2 || t.value > 8)
      .slice(-5);
  }
}
