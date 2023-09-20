import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class TemperatureDto {
  @IsNumber()
  @ApiProperty()
  fahrenheit: number;

  @IsNumber()
  @ApiProperty()
  celsius: number;

  constructor(params: TemperatureDto) {
    Object.assign(this, params);
  }
}
