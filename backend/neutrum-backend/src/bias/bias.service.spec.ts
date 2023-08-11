import { Test, TestingModule } from '@nestjs/testing';
import { BiasService } from './bias.service';

describe('BiasService', () => {
  let service: BiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiasService],
    }).compile();

    service = module.get<BiasService>(BiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
