import { Repository } from 'typeorm';
import { Temperature } from '../entities/tempreture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(Temperature)
    private readonly temperatureRepository: Repository<Temperature>,
  ) {}

  async findAllTemperatures() {
    return await this.temperatureRepository.find();
  }

  async saveTemperature(value: number): Promise<Temperature> {
    console.log('Service: Saving temperature data');

    const temperature = new Temperature();
    temperature.value = value;
    // Convert the Date object to a formatted string (e.g., ISO string)
    temperature.timestamp = new Date().toISOString();
    return this.temperatureRepository.save(temperature);
  }
}
