// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard.module';
import { LogTempreturePageModule } from './modules/logTemperaturePage.module';
@Module({
  imports: [DashboardModule, LogTempreturePageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
