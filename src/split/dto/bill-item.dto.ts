import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class billItemDto {
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name!: string;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    price!: number;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    qty!: number
}