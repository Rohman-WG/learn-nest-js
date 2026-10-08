import { Injectable } from '@nestjs/common';
import { averageExamDto } from './dto/average.dto.js';

@Injectable()
export class AverageService {
  calculateAverage(dto: averageExamDto) {
    const { scores, passMark = 70 } = dto;
    const count = scores.length
    const total = scores.reduce((sum, score) => sum + score, 0)
    const average = total / scores.length
    const highest = Math.max(...scores)
    const lowest = Math.min(...scores)
    const passed = scores.filter((score) => score >= passMark).length
    const failed = count - passed

    return {
      succes: true,
      message: "Score summary calculated",
      data: {
        count,
        average,
        highest,
        lowest,
        passMark,
        passed,
        failed
      }
    }
  }
}
