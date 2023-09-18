import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from 'src/temperature/entities/tempreture.entity';
import { ViewLogsPageController } from 'src/temperature/controllers/viewLogsPage.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Import the module with TemperatureRepository
    // Other modules you need to import
  ],
  controllers: [ViewLogsPageController],
})
export class ViewLogsPageModule {}
