import { IsDate, IsEnum, IsNumber } from 'class-validator';
import { TEMPERATURE_TYPES } from '../services/temperature-log.service';

export class CreateTemperatureLogDTO {
  @IsEnum(TEMPERATURE_TYPES)
  type?: TEMPERATURE_TYPES = TEMPERATURE_TYPES.celsius;

  @IsNumber()
  temperature: number;

  @IsDate()
  date: Date;
}
