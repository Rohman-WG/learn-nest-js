import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { HealthModule } from './health/health.module.js';
import { ShopModule } from './shop/shop.module.js';
import { AcademicModule } from './academic/academic.module.js';
import { UtilityModule } from './utility/utility.module.js';

@Module({
  imports: [GeometryModule, HealthModule, ShopModule, AcademicModule, UtilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
