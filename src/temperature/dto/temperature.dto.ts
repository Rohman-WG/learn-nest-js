import { IsEnum, IsIn, IsNotEmpty, IsNumber, NotEquals } from 'class-validator';
import { Type } from 'class-transformer';

export enum TEMPERATURE {
    CELSIUS = `C`,
    FAHRENHEIT =`F`,
    KELVIN = `K`
}

export class ConvertTemperatureParamDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
export class ConvertTemperatureQueryDto {
  @IsEnum(TEMPERATURE)
  @IsNotEmpty()
  from: string;

  @IsEnum(TEMPERATURE)
  @NotEquals('from')
  @IsNotEmpty()
  to: string;
}