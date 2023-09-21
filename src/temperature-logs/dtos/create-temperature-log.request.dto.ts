import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { TEMPERATURE_TYPES } from '../services/temperature-log.service';

export class CreateTemperatureLogDTO {
  @IsEnum(TEMPERATURE_TYPES)
  @IsOptional()
  @ApiProperty({ enum: TEMPERATURE_TYPES })
  type?: TEMPERATURE_TYPES = TEMPERATURE_TYPES.celsius;

  @IsNumber()
  @ApiProperty()
  temperature: number;

  @IsDate()
  @ApiProperty()
  date: Date;
}
