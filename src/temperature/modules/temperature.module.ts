// src/modules/log-temperature-page.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureService } from '../services/temperature.service';
import { TemperatureController } from '../controllers/temperature.controller';
import { Temperature } from '../tempreture.entity';
import { TemperatureUtilsDao } from 'src/dao/temperature-utils.dao';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Include the TemperatureEntity here
  ],
  controllers: [TemperatureController],
  providers: [TemperatureService, TemperatureUtilsDao],
  exports: [TemperatureService],
})
export class TemperatureModule {}
