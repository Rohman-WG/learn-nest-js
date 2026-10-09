import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsNumber, IsOptional, Max, Min, ValidateNested } from "class-validator";
import { billItemDto } from "./bill-item.dto.js";

export class splitBillDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(30)
    @ValidateNested({ each: true })
    @Type(() => billItemDto)
    items!: billItemDto[];

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(30)
    tipPercent: number = 0;
}