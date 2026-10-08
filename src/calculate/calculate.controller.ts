import { Controller, Get, Query } from '@nestjs/common';
import { CalculateService } from './calculate.service.js';
import { calculateTaxDto } from './dto/calculate.dto.js';

@Controller()
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}
  @Get (`tax`)
  calculateTax(@Query() dto: calculateTaxDto) {
    return this.calculateService.calculateTax(dto)
  }
}
