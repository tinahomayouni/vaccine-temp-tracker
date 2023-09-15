// src/controllers/logTemperaturePage.controller.ts
import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { LogTempreturePageService } from '../services/logTemperaturePage.service';
import { Response, Request } from 'express';

@Controller('logTempreturePage')
export class LogTempreturePageController {
  constructor(
    private readonly logTempreturePageService: LogTempreturePageService,
  ) {}

  @Get()
  @Render('logTempreturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTemperaturePage(@Req() req: Request) {
    const success = req.query.success === 'true';
    return { success };
  }

  @Post('/submit')
  async saveTemperature(
    @Body('vaccineTemperature') value: number,
    @Res() res: Response,
  ) {
    try {
      // Save the temperature data using your service
      await this.logTempreturePageService.saveTemperature(value);

      // Redirect to the success page with a query parameter
      res.redirect('/logTempreturePage?success=true');
    } catch (error) {
      // Redirect to the error page with a query parameter
      res.redirect('/logTempreturePage?error=true');
    }
  }
}
