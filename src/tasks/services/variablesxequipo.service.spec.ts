import { Test, TestingModule } from '@nestjs/testing';
import { VariablesxequipoService } from './variablesxequipo.service';

describe('VariablesxequipoService', () => {
  let service: VariablesxequipoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariablesxequipoService],
    }).compile();

    service = module.get<VariablesxequipoService>(VariablesxequipoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
