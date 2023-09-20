// src/modules/log-temperature-page.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureLogService } from '../services/temperature-log.service';
import { TemperatureLogController } from '../controllers/temperature-log.controller';
import { Temperature } from '../entities/temperature-log.entity';
import { TemperatureModule } from 'src/temperature/temperature.module';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature]), TemperatureModule],
  controllers: [TemperatureLogController],
  providers: [TemperatureLogService],
  exports: [TemperatureLogService],
})
export class TemperatureLogModule {}
