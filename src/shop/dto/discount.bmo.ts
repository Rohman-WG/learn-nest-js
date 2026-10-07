import { IsNumber, IsPositive, Max, Min } from "class-validator";

export class DiscountDto {
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  discount: number;
}


