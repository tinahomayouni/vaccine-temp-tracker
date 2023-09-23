import { IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { TEMPERATURE_TYPES } from '../services/temperature-log.service';
import { Transform } from 'class-transformer';

export class CreateTemperatureLogDTO {
  @IsEnum(TEMPERATURE_TYPES)
  type?: TEMPERATURE_TYPES = TEMPERATURE_TYPES.celsius;

  @IsNumber()
  temperature: number;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => value && new Date(value))
  date: Date;
}
