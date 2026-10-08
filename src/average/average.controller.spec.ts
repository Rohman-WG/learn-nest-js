import { Test, TestingModule } from '@nestjs/testing';
import { AverageController } from './average.controller.js';
import { AverageService } from './average.service.js';

describe('AverageController', () => {
  let controller: AverageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AverageController],
      providers: [AverageService],
    }).compile();

    controller = module.get<AverageController>(AverageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
