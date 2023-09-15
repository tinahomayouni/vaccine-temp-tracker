// src/modules/logTempreturePage.module.ts
import { Module } from '@nestjs/common';
import { viewLogsPageController } from 'src/controllers/viewLogsPage.controller';
import { ViewLogsPageService } from 'src/services/viewLogsPage.service';

@Module({
  controllers: [viewLogsPageController],
  providers: [ViewLogsPageService],
})
export class ViewLogsPageModule {}
