import { Controller } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}
}
