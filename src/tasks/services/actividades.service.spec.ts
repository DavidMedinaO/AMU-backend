import { Test, TestingModule } from '@nestjs/testing';
import { actividadesService } from './actividades.service';

describe('actividadesService', () => {
  let service: actividadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [actividadesService],
    }).compile();

    service = module.get<actividadesService>(actividadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});