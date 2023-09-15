// src/modules/logTempreturePage.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTempreturePageController } from 'src/controllers/logTemperaturePage.controller';
import { LogTempreturePageService } from 'src/services/logTemperaturePage.service';
import { Temperature } from '../entities/tempreture.entity'; // Import your TemperatureEntity

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Include the TemperatureEntity here
  ],
  controllers: [LogTempreturePageController],
  providers: [LogTempreturePageService],
})
export class LogTempreturePageModule {}
