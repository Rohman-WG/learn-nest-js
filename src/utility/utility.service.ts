import { Body, Injectable } from '@nestjs/common';
import { TemperatureDto } from './dto/temperature.dto.js';

@Injectable()
export class UtilityService {
    convertTemperature(@Body() dto: TemperatureDto) {
  let result = dto.value;
  if (dto.from === 'CELSIUS' && dto.to === 'FAHRENHEIT') {
    result = (dto.value * 9) / 5 + 32;
  } else if (dto.from === 'FAHRENHEIT' && dto.to === 'CELSIUS') {
    result = ((dto.value - 32) * 5) / 9;
  }
  return {
    message: 'Temperature converted',
    data: {
      input: { value: dto.value, unit: dto.from },
      output: { value: Number(result.toFixed(2)), unit: dto.to },
    },
  };
}
}
