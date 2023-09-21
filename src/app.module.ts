// src/app.module.ts

import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { TemperatureLogModule } from './temperature-logs/modules/temperature-log.module';
import { DatabaseModule } from 'src/database/database.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [DashboardModule, TemperatureLogModule, DatabaseModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
