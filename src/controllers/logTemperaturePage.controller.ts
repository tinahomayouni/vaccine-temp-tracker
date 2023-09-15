// src/controllers/logTempreturePage.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { LogTempreturePageService } from '../services/logTemperaturePage.service';

@Controller('logTempreturePage')
export class LogTempreturePageController {
  constructor(
    private readonly logTempreturePageService: LogTempreturePageService,
  ) {}

  @Get()
  @Render('logTempreturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTempreturePage() {
    const message = this.logTempreturePageService.getMessage();
    return { message };
  }
}
