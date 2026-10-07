import { IsIn, IsNumber } from 'class-validator';

export class TemperatureDto {
  @IsNumber()
  value!: number;

  @IsIn([`CELSIUS`, `FAHRENHEIT`])
  from!: string;

  @IsIn([`CELSIUS`, `FAHRENHEIT`])
  to!: string;
}