import { ApiProperty } from '@nestjs/swagger';

export class TemperatureLogResponseDto {
  id: number;

  celsius: number;

  fahrenheit: number;

  timestamp: Date;
}
