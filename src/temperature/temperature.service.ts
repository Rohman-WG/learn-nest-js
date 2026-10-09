import { BadRequestException, Injectable } from '@nestjs/common'
import { ConvertTemperatureQueryDto, ConvertTemperatureParamDto } from './dto/temperature.dto.js'

@Injectable()
export class TemperatureService {
  convertTemperature(param: ConvertTemperatureParamDto, body: ConvertTemperatureQueryDto) {
    const { from, to } = body
    const { value } = param

    let celsius: number
    switch (from) {
      case 'C':
        celsius = value
        break
      case 'F':
        celsius = (value - 32) * (5 / 9)
        break
      case 'K':
        celsius = value - 273.15
        break
      default:
        throw new BadRequestException('Satuan asal tidak valid')
    }

    let result: number
    switch (to) {
      case 'C':
        result = celsius
        break
      case 'F':
        result = celsius * (9 / 5) + 32
        break
      case 'K':
        result = celsius + 273.15
        break
      default:
        throw new BadRequestException('Satuan tujuan tidak valid')
    }

    return {
      succes: true,
      message: 'Temperature converted',
      data: {
        param,
        from,
        to,
        result
      }
    }
  }
}