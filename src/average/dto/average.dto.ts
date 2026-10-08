import { IsArray, IsNumber, Min, Max, ArrayMinSize, ArrayMaxSize, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class averageExamDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @Type(() => Number)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(100, { each: true })
  scores: number[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  passMark?: number = 70;
}