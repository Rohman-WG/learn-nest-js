import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertLengthDto } from './dto/convert.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get('length/:length')
  convertLength(@Param() params: ConvertLengthDto) {
    return this.convertService.convertLength(params.length);
  }
}