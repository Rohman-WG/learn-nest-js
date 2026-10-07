import { Body, Controller, Post } from '@nestjs/common';
import { ShopService } from './shop.service.js';
import { DiscountDto } from './dto/discount.bmo.js';


@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('discount')
  discountRecieve(@Body() dto: DiscountDto) {
  return this.shopService.calculateDiscount(dto);
}
}