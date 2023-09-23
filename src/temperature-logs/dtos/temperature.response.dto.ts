import { Exclude } from 'class-transformer';

export class TemperatureLogResponseDto {
  id: number;

  celsius: number;

  fahrenheit: number;

  @Exclude()
  timestamp: Date;

  constructor(params: TemperatureLogResponseDto) {
    Object.assign(this, params);
  }
}
