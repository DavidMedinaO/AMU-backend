import { Test, TestingModule } from '@nestjs/testing';
import { CalibracionService } from './calibracion.service';

describe('CalibracionService', () => {
  let service: CalibracionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalibracionService],
    }).compile();

    service = module.get<CalibracionService>(CalibracionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
