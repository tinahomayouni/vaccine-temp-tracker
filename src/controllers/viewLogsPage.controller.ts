import { Controller, Get, Render } from '@nestjs/common';
import { Temperature } from '../entities/tempreture.entity'; // Adjust the path as needed
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('viewLogsPage')
export class ViewLogsPageController {
  constructor(
    @InjectRepository(Temperature) // Inject the Temperature repository
    private readonly temperatureRepository: Repository<Temperature>,
  ) {}

  @Get()
  @Render('viewLogsPage')
  async viewTemperatures() {
    const temperatures = await this.temperatureRepository.find();
    console.log('show all records in temperature table ');
    return { temperatures };
  }
}
