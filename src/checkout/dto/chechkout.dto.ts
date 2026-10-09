import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
export enum COUPON {
    HEMAT10 = `HEMAT10`,
    HEMAT20 = `HEMAT20`,
    FREESHIP = `FREESHIP`
}
export class ShoppingQueryDto {
    @IsOptional()
    @IsBoolean()
    member?: boolean

    @IsOptional()
    @IsEnum(COUPON)
    coupon?: COUPON
}

export class ShoppingBodyDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested({ each: true})
    @Type(() => Item)
    items: Item[]
}

export class Item {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name!: string

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @Min(0)
    price!: number

    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    @Min(1)
    quantity!: number
}