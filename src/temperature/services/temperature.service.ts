// src/services/log-temperature-page.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Temperature } from '../tempreture.entity';
import { TemperatureUtilsDao } from '../../dao/temperature-utils.dao';
import { TemperatureDto } from '../../dtos/response/temperature.response.dto';

export enum types {
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

  async saveTemperature(value: number): Promise<Temperature> {
    console.log('Service: Saving temperature data');

    const temperature = new Temperature();
    temperature.celsius = value; // Set the 'celsius' value to the provided 'value'
    temperature.fahrenheit = await this.convertCelsiusToFahrenheit(value); // Set the 'fahrenheit' value
    temperature.timestamp = new Date();

    return await this.temperatureRepository.save(temperature);
  }

  async getTemperature(
    type: types,
    temperature: number,
  ): Promise<TemperatureDto> {
    let celsius: number;
    let fahrenheit: number;

    switch (type) {
      case types.celsius:
        celsius = temperature;
        fahrenheit = await this.convertCelsiusToFahrenheit(temperature);
        break;
      case types.fahrenheit:
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
