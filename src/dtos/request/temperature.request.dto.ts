import { IsEnum, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TEMPERATURE_TYPES } from 'src/temperature-logs/services/temperature.service';

export class TemperatureRequestParams {
  @ApiProperty({ enum: TEMPERATURE_TYPES })
  @IsEnum(TEMPERATURE_TYPES)
  type: TEMPERATURE_TYPES;

  @ApiProperty()
  @IsNumberString()
  temperature: number;
}
