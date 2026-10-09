import { Injectable } from '@nestjs/common';
import { billsParamDto } from './dto/bill-params.dto.js';
import { splitBillDto } from './dto/split-bill.dto.js';

@Injectable()
export class SplitService {
  splitBill(params: billsParamDto, dto: splitBillDto) {
    const { peopleCount } = params;
    const { items, tipPercent } = dto;

    const subtotal = items.reduce(
      (total, item) => total + item.price * item.qty,
      0,
    );

    const tip = subtotal * (tipPercent / 100);

    const total = subtotal + tip;

    const perPerson = Math.round(total / peopleCount);

    return {
      success: true,
      message: 'Bill split',
      data: {
        peopleCount,
        subtotal,
        tipPercent,
        tip,
        total,
        perPerson,
      },
    };
  }
}