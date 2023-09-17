import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewLogsPageController } from '../controllers/viewLogsPage.controller';
import { Temperature } from '../entities/tempreture.entity'; // Adjust the path as needed

@Module({
  imports: [
    TypeOrmModule.forFeature([Temperature]), // Import the module with TemperatureRepository
    // Other modules you need to import
  ],
  controllers: [ViewLogsPageController],
})
export class ViewLogsPageModule {}
