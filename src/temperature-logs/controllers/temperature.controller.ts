import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { TemperatureService } from '../services/temperature.service';
import { TemperatureRequestParams } from 'src/dtos/request/temperature.request.dto';
import { TemperatureDto } from 'src/dtos/response/temperature.response.dto';
import { CreateTemperatureLogDTO } from '../dtos/create-temperature-log';

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
  async saveTemperature(@Body() body: CreateTemperatureLogDTO) {
    console.log('Controller: Received POST request');

    try {
      // Save the temperature data using your service
      await this.temperatureService.saveTemperature(body);
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

  // Updated route handling for Celsius and Fahrenheit
  @Get(':unit') // Route parameter for temperature unit (celsius or fahrenheit)
  @Render('temperatureList')
  async getTemperatures(@Param('unit') unit: string) {
    // Check if the unit is 'celsius' or 'fahrenheit'

    if (unit === 'celsius' || unit === 'fahrenheit') {
      const temperatures = await this.temperatureService.findAllTemperatures();
      return { temperatures, unit };
    } else {
      // Handle invalid unit here, for example, return an error message
      return { error: 'Invalid unit specified' };
    }
  }
}
