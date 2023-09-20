import { Injectable } from '@nestjs/common';
import { TemperatureService } from 'src/temperature/services/temperature.service';
import { Temperature } from '../temperature/tempreture.entity';

@Injectable()
export class DashboardService {
  constructor(private readonly temperatureService: TemperatureService) {}

  async getRecentReadings() {
    const temperatures: Temperature[] =
      await this.temperatureService.findAllTemperatures();
    return temperatures.slice(-5);
  }

  async getAlarms() {
    const temperatures: Temperature[] =
      await this.temperatureService.findAllTemperatures();
    return temperatures.filter((t) => t.celsius < 2 || t.celsius > 8).slice(-5);
  }
}
