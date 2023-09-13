import { Controller, Get } from '@nestjs/common';
import { RecentReadingTempretureService } from '../services/recentReadingTempreture.service';

@Controller()
export class RecentReadingTempretureController {
  constructor(
    private readonly recentReadingTempretureService: RecentReadingTempretureService,
  ) {}

  @Get()
  getHello(): string {
    return this.recentReadingTempretureService.getHello();
  }
}
