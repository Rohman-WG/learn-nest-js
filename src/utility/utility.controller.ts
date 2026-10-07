import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { TemperatureDto } from './dto/temperature.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}
  @Post (`temperature`)
  checkTemperature(@Body() dto: TemperatureDto) {
    return this.utilityService.convertTemperature(dto)
  }
}
