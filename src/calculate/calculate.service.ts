import { Injectable } from '@nestjs/common';
import { calculateTaxDto } from './dto/calculate.dto.js';

@Injectable()
export class CalculateService {
  calculateTax(dto: calculateTaxDto) {
    const { amount, rate, inclusive } = dto;
    const taxRate = rate / 100

    let tax: number;
    let net: number;
    let gross: number;

    if (inclusive) {
      gross = amount;
      net = amount / (1 + taxRate)
      tax = gross - net
    } else {
      net = amount;
      tax = amount * taxRate;
      gross = amount + tax;
    }

    return {
      succes : true,
      message : `Tax Calculated`,
      data: {
        amount,
        rate,
        inclusive,
        tax,
        net,
        gross
      }
    }
  }
}
