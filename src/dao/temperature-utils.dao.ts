import { Injectable } from '@nestjs/common';

const db = {
  multiplier: 5 / 9,
};

@Injectable()
export class TemperatureUtilsDao {
  async getTemperatureMultiplier(): Promise<number> {
    return db.multiplier;
  }
}
