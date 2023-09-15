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
    const temperature = new Temperature();
    temperature.value = value;

    return this.temperatureRepository.save(temperature);
  }
}
