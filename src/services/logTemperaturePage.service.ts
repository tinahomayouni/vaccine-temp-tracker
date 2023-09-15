// src/services/logTempreturePage.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Temperature } from '../entities/tempreture.entity';

@Injectable()
export class LogTempreturePageService {
  constructor(
    @InjectRepository(Temperature)
    private readonly temperatureRepository: Repository<Temperature>,
  ) {}

  async saveTemperature(value: number): Promise<Temperature> {
    console.log('Service: Saving temperature data');

    const temperature = new Temperature();

    temperature.value = value;

    // Convert the Date object to a formatted string (e.g., ISO string)
    temperature.timestamp = new Date().toISOString();

    return this.temperatureRepository.save(temperature);
  }
}
