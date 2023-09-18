// src/temperature/recentReadingTemperature.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class RecentReadingTemperatureService {
  async getRecentReadings(): Promise<
    { timestamp: Date; temperature: number }[]
  > {
    // Generate mock temperature readings for demonstration
    const readings: { timestamp: Date; temperature: number }[] = [];

    // Generate readings for the last 24 hours
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    for (let i = 0; i < 100; i++) {
      const timestamp = new Date(
        twentyFourHoursAgo.getTime() + i * 3600000, // One reading per hour
      );
      const temperature = Math.random() * 10 + 5; // Random temperature between 5°C and 15°C
      readings.push({ timestamp, temperature });
    }

    // Filter readings outside the normal range (below 2°C or above 8°C)
    const alerts = readings.filter(
      (reading) => reading.temperature < 2 || reading.temperature > 8,
    );

    return alerts;
  }
}
