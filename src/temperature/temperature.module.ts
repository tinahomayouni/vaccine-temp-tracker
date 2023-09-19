// src/modules/log-temperature-page.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';
import { Temperature } from './tempreture.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Include the TemperatureEntity here
  ],
  controllers: [TemperatureController],
  providers: [TemperatureService],
  exports: [TemperatureService],
})
export class TemperatureModule {}
