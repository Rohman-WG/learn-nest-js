import { IsNumber, IsPositive, Max, Min } from "class-validator";

export class GradeDto {
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(100)
    score!: number;
}