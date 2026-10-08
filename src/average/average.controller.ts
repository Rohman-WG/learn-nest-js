import { Body, Controller, Post } from '@nestjs/common';
import { AverageService } from './average.service.js';
import { averageExamDto } from './dto/average.dto.js';

@Controller(`scores`)
export class AverageController {
  constructor(private readonly averageService: AverageService) { }
  @Post(`average`)
  calculateAverage(@Body() dto: averageExamDto) {
    return this.averageService.calculateAverage(dto)
  }
}
