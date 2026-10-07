import { IsNumber, IsPositive } from 'class-validator';

export class BMI {
  @IsNumber()
  @IsPositive()
  weight: number;

  @IsNumber()
  @IsPositive()
  height: number;
}