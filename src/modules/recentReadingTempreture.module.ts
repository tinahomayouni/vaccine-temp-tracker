import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/recentReadingTempreture.controller';
import { RecentReadingTemperatureService } from '../services/recentReadingTempreture.service';

@Module({
  controllers: [DashboardController],
  providers: [RecentReadingTemperatureService],
})
export class TemperatureModule {}
