import { Test, TestingModule } from '@nestjs/testing';
import { VariablesxequipoController } from './variablesxequipo.controller';

describe('VariablesxequipoController', () => {
  let controller: VariablesxequipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariablesxequipoController],
    }).compile();

    controller = module.get<VariablesxequipoController>(VariablesxequipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
