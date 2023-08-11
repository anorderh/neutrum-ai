import { Test, TestingModule } from '@nestjs/testing';
import { BiasController } from './bias.controller';

describe('BiasController', () => {
  let controller: BiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiasController],
    }).compile();

    controller = module.get<BiasController>(BiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
