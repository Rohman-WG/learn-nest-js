import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { HealthModule } from './health/health.module.js';
import { ShopModule } from './shop/shop.module.js';
import { AcademicModule } from './academic/academic.module.js';
import { UtilityModule } from './utility/utility.module.js';
import { ConvertModule } from './convert/convert.module.js';
import { AverageModule } from './average/average.module.js';
import { CalculateModule } from './calculate/calculate.module.js';
import { SplitModule } from './split/split.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';

@Module({
  imports: [GeometryModule, HealthModule, ShopModule, AcademicModule, UtilityModule, ConvertModule, AverageModule, CalculateModule, SplitModule, TemperatureModule, CheckoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
