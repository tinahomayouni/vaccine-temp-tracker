import { ApiProperty } from '@nestjs/swagger';

export class TemperatureDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  celsius: number;

  @ApiProperty()
  fahrenheit: number;

  @ApiProperty()
  timestamp: Date;
}
