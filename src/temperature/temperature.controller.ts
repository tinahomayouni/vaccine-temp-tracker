import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogTempreturePageService } from './temperature.service';
import { Temperature } from './tempreture.entity';

@Controller()
export class TemperatureController {
  constructor(
    @InjectRepository(Temperature) // Inject the Temperature repository
    private readonly temperatureRepository: Repository<Temperature>,
    private readonly logTempreturePageService: LogTempreturePageService,
  ) {}

  @Get('log-temperature-page')
  @Render('logTemperaturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTemperaturePage() {
    return { success: false };
  }

  @Post('log-temperature-page/submit')
  @Render('logTemperaturePage')
  async saveTemperature(@Body('vaccineTemperature') value: number) {
    console.log('Controller: Received POST request');

    try {
      // Save the temperature data using your service
      await this.logTempreturePageService.saveTemperature(value);
      console.log('Controller: Temperature data saved successfully');

      // Redirect to the success page with a query parameter
      // res.redirect('/logTempreturePage?success=true');
      return { success: true };
    } catch (error) {
      // Redirect to the error page with a query parameter
      return { success: true };
      // res.redirect('/logTempreturePage?error=true');
    }
  }

  @Get('view-logs-page')
  @Render('viewLogsPage')
  async viewTemperatures() {
    const temperatures = await this.temperatureRepository.find();
    console.log('show all records in temperature table ');
    return { temperatures };
  }
}
