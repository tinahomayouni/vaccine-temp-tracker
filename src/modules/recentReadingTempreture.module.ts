import { Module } from '@nestjs/common';
import { RecentReadingTempretureController } from '../controllers/recentReadingTempreture.controller';
import { RecentReadingTempretureService } from '../services/recentReadingTempreture.service';

@Module({
  imports: [],
  controllers: [RecentReadingTempretureController],
  providers: [RecentReadingTempretureService],
})
export class recentReadingTempretureModule {}
