// src/app.module.ts

import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { LogTempreturePageModule } from './temperature/logTemperaturePage.module';
import { DatabaseModule } from 'src/database/database.module';
import { ViewLogsPageModule } from './temperature/viewLogsPage.module';

@Module({
  imports: [
    DashboardModule,
    LogTempreturePageModule,
    ViewLogsPageModule,
    DatabaseModule,
  ],
})
export class AppModule {}
