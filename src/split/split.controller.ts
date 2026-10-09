import { Body, Controller, Param, Post } from '@nestjs/common';
import { SplitService } from './split.service.js';
import { splitBillDto } from './dto/split-bill.dto.js';
import { billsParamDto } from './dto/bill-params.dto.js';

@Controller('bills')
export class SplitController {
  constructor(private readonly splitService: SplitService) {}
  @Post(`:peopleCount/split`)
  splitBill(@Body() dto: splitBillDto, @Param() Param: billsParamDto) {
    return this.splitService.splitBill(Param, dto)
  }
}