import { Module } from '@nestjs/common';
import { SplitService } from './split.service.js';
import { SplitController } from './split.controller.js';

@Module({
  controllers: [SplitController],
  providers: [SplitService],
})
export class SplitModule {}
