// src/controllers/viewLogsPage.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { ViewLogsPageService } from '../services/viewLogsPage.service';

@Controller('viewLogsPage')
export class viewLogsPageController {
  constructor(private readonly viewLogsPageService: ViewLogsPageService) {}

  @Get()
  @Render('viewLogsPage') // Specify the name of your EJS template (e.g., viewLogsPage.ejs)
  async getviewLogsPage() {
    const message = this.viewLogsPageService.getMessage();
    return { message };
  }
}
