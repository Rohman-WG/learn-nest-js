import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, Max, Min } from "class-validator";


export class calculateTaxDto {
    @IsNumber()
    @Min(0)
    amount!: number

    @IsNumber()
    @Min(0)
    @Max(100)
    rate!: number

    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    inclusive: boolean = false
}