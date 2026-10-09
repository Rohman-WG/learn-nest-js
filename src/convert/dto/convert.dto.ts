import { IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ConvertLengthDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1000000)
  meters: number;
}