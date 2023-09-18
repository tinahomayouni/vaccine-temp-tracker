// src/modules/logTempreturePage.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './entities/tempreture.entity'; // Import your TemperatureEntity
import { LogTempreturePageController } from 'src/temperature/controllers/logTemperaturePage.controller';
import { LogTempreturePageService } from './services/logTemperaturePage.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Include the TemperatureEntity here
  ],
  controllers: [LogTempreturePageController],
  providers: [LogTempreturePageService],
})
export class LogTempreturePageModule {}
