import { IsEnum, IsNumberString } from 'class-validator';
import { types } from '../../temperature/services/temperature.service';

export class TemperatureRequestParams {
  @IsEnum(types)
  type: types;

  @IsNumberString()
  temperature: number;
}
