import { Controller, Get, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Temperature } from 'src/temperature/tempreture.entity';
import { Repository } from 'typeorm';

@Controller('dashboard')
export class DashboardController {
  constructor(
    @InjectRepository(Temperature) // Inject the Temperature repository
    private readonly temperatureRepository: Repository<Temperature>,
  ) {}

  @Get()
  @Render('dashboard')
  async getDashboard() {
    const temperatures = await this.temperatureRepository.find();
    console.log('show 5 records in temperature table ');
    return { temperatures };
  }
}
