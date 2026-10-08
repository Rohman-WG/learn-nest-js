import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {
  convertLength(meters: number) {
    const kilometers = meters / 1000;
    const centimeters = meters * 100;
    const miles = Number((meters * 0.000621371).toFixed(3));

    return {
      success: true,
      message: 'Length converted',
      data: {
        meters: meters,
        kilometers: kilometers,
        centimeters: centimeters,
        miles: miles,
      },
    };
  }
}