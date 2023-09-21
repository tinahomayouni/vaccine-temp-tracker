import { ApiProperty } from '@nestjs/swagger';

export class TemperatureLogResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  celsius: number;

  @ApiProperty()
  fahrenheit: number;

  @ApiProperty()
  timestamp: Date;
}
