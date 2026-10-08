import { Module } from '@nestjs/common';
import { AverageService } from './average.service.js';
import { AverageController } from './average.controller.js';

@Module({
  controllers: [AverageController],
  providers: [AverageService],
})
export class AverageModule {}
