import { Body, Injectable } from '@nestjs/common';
import { BMI } from './dto/bmi.dto.js';

@Injectable()
export class HealthService {
  calculateBmi(@Body() dto: BMI) {
    const heightM = dto.height / 100;
    const bmi = Number((dto.weight / heightM ** 2).toFixed(2));
    let status = 'Normal';
    if (bmi < 18.5) status = 'Underweight';
    else if (bmi >= 25 && bmi < 30) status = 'Overweight';
    else if (bmi >= 30) status = 'Obese';
    return {
      message: 'BMI calculated', data: { ...dto, bmi, status }
    };
  }
}