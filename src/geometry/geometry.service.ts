import { Injectable } from '@nestjs/common';
import { CircleDto } from './dto/circle.dto.js';

@Injectable()
export class GeometryService {
    countCircle(dto: CircleDto) {
        const radius = dto.radius
        const area = Math.PI * radius ** 2
        return {
            message: `Circle area has counted`,
            radius,
            area
        }
    }
}
