import { Test, TestingModule } from '@nestjs/testing';
import { SplitController } from './split.controller.js';
import { SplitService } from './split.service.js';

describe('SplitController', () => {
  let controller: SplitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SplitController],
      providers: [SplitService],
    }).compile();

    controller = module.get<SplitController>(SplitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
