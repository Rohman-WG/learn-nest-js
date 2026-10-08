import { Test, TestingModule } from '@nestjs/testing';
import { AverageService } from './average.service.js';

describe('AverageService', () => {
  let service: AverageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AverageService],
    }).compile();

    service = module.get<AverageService>(AverageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
