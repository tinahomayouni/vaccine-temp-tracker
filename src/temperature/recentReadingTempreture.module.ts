import { Module } from '@nestjs/common';
import { DashboardController } from 'src/dashboard/dashboard.controller';
import { RecentReadingTemperatureService } from 'src/temperature/services/recentReadingTempreture.service';

@Module({
  controllers: [DashboardController],
  providers: [RecentReadingTemperatureService],
})
export class TemperatureModule {}
