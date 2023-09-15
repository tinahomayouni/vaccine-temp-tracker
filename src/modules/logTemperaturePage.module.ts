// src/modules/logTempreturePage.module.ts
import { Module } from '@nestjs/common';
import { LogTempreturePageController } from 'src/controllers/logTemperaturePage.controller';
import { LogTempreturePageService } from 'src/services/logTemperaturePage.service';

@Module({
  controllers: [LogTempreturePageController],
  providers: [LogTempreturePageService],
})
export class LogTempreturePageModule {}
