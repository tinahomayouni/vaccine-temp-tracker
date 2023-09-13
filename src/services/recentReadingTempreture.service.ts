import { Injectable } from '@nestjs/common';

@Injectable()
export class RecentReadingTemperatureService {
  private recentReadings: Array<{ timestamp: Date; temperature: number }> = [];

  logTemperature(temperature: number) {
    const timestamp = new Date();
    this.recentReadings.unshift({ timestamp, temperature });
    if (this.recentReadings.length > 10) {
      // Keep the last 10 readings
      this.recentReadings.pop();
    }
  }

  getRecentReadings(limit: number = 5) {
    return this.recentReadings.slice(0, limit);
  }
}
