import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { TemperatureService } from '../services/temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get('create-form')
  @Render('logTemperaturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTemperaturePage() {
    console.log('here');
    return { success: false };
  }

  @Post()
  @Render('logTemperaturePage')
  async saveTemperature(@Body('vaccineTemperature') value: number) {
    console.log('Controller: Received POST request');

    try {
      // Save the temperature data using your service
      await this.temperatureService.saveTemperature(value);
      console.log('Controller: Temperature data saved successfully');

      return { success: true };
    } catch (error) {
      return { success: false, error: true };
    }
  }

  @Get()
  @Render('viewLogsPage')
  async viewTemperatures() {
    const temperatures = await this.temperatureService.findAllTemperatures();
    console.log('show all records in temperature table ');
    return { temperatures };
  }
}
