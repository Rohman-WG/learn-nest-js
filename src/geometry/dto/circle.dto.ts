//**
// DTO (Data Transfer Object)
// Fungsi: mendefinisikan request data yang
// dibutuhkan */

import { IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";

export class CircleDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @IsPositive()
    radius!: number
    // "!"" wajib ada //

}