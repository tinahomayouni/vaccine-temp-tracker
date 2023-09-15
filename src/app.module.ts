// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard.module';
import { LogTempreturePageModule } from './modules/logTemperaturePage.module';
import { ViewLogsPageModule } from './modules/viewLogsPage.module';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [
    DashboardModule,
    LogTempreturePageModule,
    ViewLogsPageModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
