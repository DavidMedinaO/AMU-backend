import { Test, TestingModule } from '@nestjs/testing';
import { CalibracionController } from './calibracion.controller';

describe('CalibracionController', () => {
  let controller: CalibracionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalibracionController],
    }).compile();

    controller = module.get<CalibracionController>(CalibracionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
