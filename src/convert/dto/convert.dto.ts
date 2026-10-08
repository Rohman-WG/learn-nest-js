import { IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ConvertLengthDto {
  @Type(() => Number)
  @IsNumber({}, { message: 'length must be a number' })
  @Min(0, { message: 'length must not be less than 0' })
  @Max(1000000, { message: 'length must not be greater than 1000000' })
  length: number;
}