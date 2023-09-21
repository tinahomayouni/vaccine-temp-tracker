import { Injectable } from '@nestjs/common';

const db = {
  multiplier: 5 / 9,
};

@Injectable()
export class TemperatureUtilsDao {
  getTemperatureMultiplier(): number {
    return db.multiplier;
  }
}
