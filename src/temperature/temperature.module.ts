import { Module } from '@nestjs/common';
import { TemperatureService } from './services/temperature.service';
import { TemperatureUtilsDao } from './dao/temperature-utils.dao';

@Module({
  providers: [TemperatureService, TemperatureUtilsDao],
  exports: [TemperatureService],
})
export class TemperatureModule {}
