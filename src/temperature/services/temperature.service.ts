import { Injectable } from '@nestjs/common';
import { TemperatureUtilsDao } from '../dao/temperature-utils.dao';
import { TemperatureDto } from '../dtos/response/temperature.response.dto';

export enum TEMPERATURE_TYPES {
  fahrenheit = 'fahrenheit',
  celsius = 'celsius',
}

@Injectable()
export class TemperatureService {
  constructor(private readonly temperatureUtilsDao: TemperatureUtilsDao) {}

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

  convertFahrenheitToCelsius(fahrenheit: number): number {
    const celsiusTemp =
      (fahrenheit - 32) * this.temperatureUtilsDao.getTemperatureMultiplier();

    return parseFloat(celsiusTemp.toFixed(2));
  }

  convertCelsiusToFahrenheit(celcius: number): number {
    const fahrenheitTemp =
      celcius / this.temperatureUtilsDao.getTemperatureMultiplier() + 32;

    return parseFloat(fahrenheitTemp.toFixed(2));
  }
}
