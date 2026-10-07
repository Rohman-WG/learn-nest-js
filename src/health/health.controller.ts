import { Body, Controller, Post } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { BMI } from './dto/bmi.dto.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post(`BMI`)
  BMIstatus(@Body() dto: BMI) {
    return this.healthService.calculateBmi(dto)
  }
}