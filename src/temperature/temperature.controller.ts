import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { ConvertTemperatureParamDto, ConvertTemperatureQueryDto } from './dto/temperature.dto.js';

@Controller('convert')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}
  @Get(`temperature/:value`)
  convertTemperature(@Param() param: ConvertTemperatureParamDto, @Query() body: ConvertTemperatureQueryDto) {
    return this.temperatureService.convertTemperature(param, body)
  }
}
