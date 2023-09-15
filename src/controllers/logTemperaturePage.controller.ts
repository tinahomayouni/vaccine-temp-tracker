// src/controllers/logTempreturePage.controller.ts
import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { LogTempreturePageService } from '../services/logTemperaturePage.service';

@Controller('logTempreturePage')
export class LogTempreturePageController {
  constructor(
    private readonly logTempreturePageService: LogTempreturePageService,
  ) {}

  @Get()
  @Render('logTempreturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTemperaturePage() {
    return {};
  }
  @Post('/submit')
  async saveTemperature(@Body('vaccineTemperature') value: number) {
    await this.logTempreturePageService.saveTemperature(value);
    return { message: 'Temperature data saved successfully' };
  }
}
