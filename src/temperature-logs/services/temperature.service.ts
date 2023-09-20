// src/services/log-temperature-page.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureUtilsDao } from '../../dao/temperature-utils.dao';
import { TemperatureDto } from 'src/dtos/response/temperature.response.dto';
import { CreateTemperatureLogDTO as CreateTemperatureLogDTO } from '../dtos/create-temperature-log';
import { Temperature } from '../temperature.entity';

export enum TEMPERATURE_TYPES {
  fahrenheit = 'fahrenheit',
  celsius = 'celsius',
}
@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(Temperature)
    private readonly temperatureRepository: Repository<Temperature>,
    private readonly temperatureUtilsDao: TemperatureUtilsDao,
  ) {}

  async findAllTemperatures() {
    return await this.temperatureRepository.find();
  }

  async saveTemperature(
    createTempDto: CreateTemperatureLogDTO,
  ): Promise<Temperature> {
    console.log('Service: Saving temperature data');

    const temperature = new Temperature();
    temperature.celsius = createTempDto.temperature; // Set the 'celsius' value to the provided 'value'
    temperature.fahrenheit = await this.convertCelsiusToFahrenheit(
      createTempDto.temperature,
    );
    temperature.timestamp = createTempDto.date;

    return await this.temperatureRepository.save(temperature);
  }

  async getTemperature(
    type: TEMPERATURE_TYPES,
    temperature: number,
  ): Promise<TemperatureDto> {
    let celsius: number;
    let fahrenheit: number;

    switch (type) {
      case TEMPERATURE_TYPES.celsius:
        celsius = temperature;
        fahrenheit = await this.convertCelsiusToFahrenheit(temperature);
        break;
      case TEMPERATURE_TYPES.fahrenheit:
        celsius = await this.convertCelsiusToFahrenheit(temperature);
        fahrenheit = temperature;
        break;
      default:
        return type satisfies never;
    }

    return new TemperatureDto({
      celsius,
      fahrenheit,
    });
  }

  async convertFahrenheitToCelsius(fahrenheit: number): Promise<number> {
    const celsiusTemp =
      (fahrenheit - 32) *
      (await this.temperatureUtilsDao.getTemperatureMultiplier());

    return parseFloat(celsiusTemp.toFixed(2));
  }

  async convertCelsiusToFahrenheit(celcius: number): Promise<number> {
    const fahrenheitTemp =
      celcius / (await this.temperatureUtilsDao.getTemperatureMultiplier()) +
      32;

    return parseFloat(fahrenheitTemp.toFixed(2));
  }
}
