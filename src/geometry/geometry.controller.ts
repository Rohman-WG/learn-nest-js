import { Body, Controller, Post, RawBody } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { CircleDto } from './dto/circle.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post(`circle-area`)
  circleArea(@Body() dto: CircleDto) {
    return this.geometryService.countCircle(dto)
  }
}
