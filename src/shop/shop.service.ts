import { Body, Injectable } from '@nestjs/common';
import { DiscountDto } from './dto/discount.bmo.js';

@Injectable()
export class ShopService {
    calculateDiscount(@Body() dto: DiscountDto) {
        const saved = dto.price * (dto.discount / 100);
        return {
            message: 'Discount calculated',
            data: {
                originalPrice: dto.price,
                discountPercent: dto.discount,
                savedAmount: Number(saved.toFixed(0)),
                finalPrice: Number((dto.price - saved).toFixed(0)),
            },
        };
    }
}
