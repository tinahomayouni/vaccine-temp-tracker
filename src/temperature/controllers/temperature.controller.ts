import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { TemperatureService } from '../services/temperature.service';
import { TemperatureRequestParams } from 'src/dtos/request/temperature.request.dto';
import { TemperatureDto } from 'src/dtos/response/temperature.response.dto';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get('create-form')
  @Render('logTemperaturePage') // Specify the name of your EJS template (e.g., logTempreturePage.ejs)
  async getLogTemperaturePage() {
    console.log('here');
    return { success: false };
  }

  @Post('create-form/submit')
  @Render('logTemperaturePage')
  async saveTemperature(@Body('vaccineTemperatureCelsius') value: number) {
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

  @Get('all-logs')
  @Render('viewLogsPage')
  async viewTemperatures() {
    const temperatures = await this.temperatureService.findAllTemperatures();
    console.log('show all records in temperature table ');
    return { temperatures };
  }
  @Get('/:type/:temperature')
  async convertToCelsius(
    @Param() params: TemperatureRequestParams,
  ): Promise<TemperatureDto> {
    const temperature = this.temperatureService.getTemperature(
      params.type,
      params.temperature,
    );
    return temperature;
  }
}
