"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const variablesxequipo_service_1 = require("./variablesxequipo.service");
describe('VariablesxequipoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [variablesxequipo_service_1.VariablesxequipoService],
        }).compile();
        service = module.get(variablesxequipo_service_1.VariablesxequipoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=variablesxequipo.service.spec.js.map