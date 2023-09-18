import { Controller, Get, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Temperature } from 'src/temperature/entities/tempreture.entity';
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
