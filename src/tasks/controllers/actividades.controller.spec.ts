import { Test, TestingModule } from '@nestjs/testing';
import { actividadesController } from './actividades.controller';

describe('EquiposController', () => {
  let controller: actividadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [actividadesController],
    }).compile();

    controller = module.get<actividadesController>(actividadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});