// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard.module'; // Import the DashboardModule

@Module({
  imports: [DashboardModule], // Include the DashboardModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
