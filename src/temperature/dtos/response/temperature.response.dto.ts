import { IsNumber } from 'class-validator';

export class TemperatureDto {
  @IsNumber()
  fahrenheit: number;

  @IsNumber()
  celsius: number;

  constructor(params: TemperatureDto) {
    Object.assign(this, params);
  }
}
