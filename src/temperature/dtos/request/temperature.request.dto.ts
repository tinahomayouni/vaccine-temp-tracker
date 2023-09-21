import { IsEnum, IsNumberString } from 'class-validator';
import { TEMPERATURE_TYPES } from 'src/temperature/services/temperature.service';

export class TemperatureRequestParams {
  @IsEnum(TEMPERATURE_TYPES)
  type: TEMPERATURE_TYPES;

  @IsNumberString()
  temperature: number;
}
