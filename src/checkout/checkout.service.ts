import { Injectable } from '@nestjs/common';
import { COUPON, ShoppingBodyDto, ShoppingQueryDto } from './dto/chechkout.dto.js';

@Injectable()
export class CheckoutService {
  shoppingDiscount(query: ShoppingQueryDto, body: ShoppingBodyDto) {
    const member = query?.member || false
    const coupon = query?.coupon
    const items = body.items

    const subtotal = items.reduce((sum, item) => {
      return sum + (item.price * item.quantity)
    }, 0)

    const discount = member ? 0.05 : 0
    let voucher = 0
    if (coupon === COUPON.HEMAT10) voucher = 0.10
    if (coupon === COUPON.HEMAT20) voucher = 0.20

    const discountFee = (discount + voucher * subtotal)
    const grandTotal = subtotal - discountFee

    return {
      succes: true,
      message: `Checkout calculated`,
      data: {
        subtotal,
        member,
        coupon,
        discountFee,
        grandTotal
      }
    }
  }
}
