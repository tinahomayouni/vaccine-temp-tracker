// src/services/log-temperature-page.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTemperatureLogDTO as CreateTemperatureLogDTO } from '../dtos/create-temperature-log.request.dto';
import { Temperature } from '../entities/temperature-log.entity';
import { TemperatureService } from 'src/temperature/services/temperature.service';
import { TemperatureLogResponseDto } from '../dtos/temperature.response.dto';

export enum TEMPERATURE_TYPES {
  fahrenheit = 'fahrenheit',
  celsius = 'celsius',
}
@Injectable()
export class TemperatureLogService {
  constructor(
    @InjectRepository(Temperature)
    private readonly temperatureRepository: Repository<Temperature>,
    private readonly temperatureService: TemperatureService,
  ) {}

  async findAllTemperatures(): Promise<TemperatureLogResponseDto[]> {
    const allTemperatures = await this.temperatureRepository.find();
    return allTemperatures.map((temperature) => ({
      ...temperature,
      fahrenheit: this.temperatureService.convertCelsiusToFahrenheit(
        temperature.celsius,
      ),
    }));
  }

  async saveTemperature(
    createTempDto: CreateTemperatureLogDTO,
  ): Promise<Temperature> {
    console.log('Service: Saving temperature data');

    const temperature = new Temperature();
    if (createTempDto.type === TEMPERATURE_TYPES.fahrenheit) {
      temperature.celsius = this.temperatureService.convertFahrenheitToCelsius(
        createTempDto.temperature,
      );
    } else {
      temperature.celsius = createTempDto.temperature;
    }
    temperature.timestamp = createTempDto.date;

    return this.temperatureRepository.save(temperature);
  }
}
