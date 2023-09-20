import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class CreateTemperatureLogDTO {
  @IsNumber()
  @ApiProperty()
  temperature: number;

  @IsDate()
  @ApiProperty()
  date: Date;
}
