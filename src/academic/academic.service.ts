import { Body, Injectable } from '@nestjs/common';
import { GradeDto } from './dto/score.dto.js';

@Injectable()
export class AcademicService {
    convertGrade(@Body() dto: GradeDto) {
        let grade = 'E';
        if (dto.score >= 90) grade = 'A';
        else if (dto.score >= 80) grade = 'B';
        else if (dto.score >= 70) grade = 'C';
        else if (dto.score >= 60) grade = 'D';
        return { message: 'Grade converted', data: { score: dto.score, grade } };
    }
}