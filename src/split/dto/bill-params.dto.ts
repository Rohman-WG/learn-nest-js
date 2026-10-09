import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class billsParamDto {
    @Type(() => Number)
    @IsInt()
    @Min(2)
    @Max(20)
    peopleCount: number
}