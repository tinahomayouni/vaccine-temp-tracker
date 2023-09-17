// src/dashboard/dashboard.module.ts or the relevant module

import { Module } from '@nestjs/common';
import { DashboardController } from '../controllers/dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from 'src/entities/tempreture.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Import the module with TemperatureRepository
    // Other modules you need to import
  ],
  controllers: [DashboardController],
})
export class DashboardModule {}
