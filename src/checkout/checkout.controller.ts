import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { ShoppingBodyDto, ShoppingQueryDto } from './dto/chechkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}
  
  @Post(`discount`) 
    shoppingDiscount(@Query() query: ShoppingQueryDto, @Body() body: ShoppingBodyDto) {
      return this.checkoutService.shoppingDiscount(query, body)
    }
  
}
