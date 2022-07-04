"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const verificacion_service_1 = require("./verificacion.service");
describe('VerificacionService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [verificacion_service_1.VerificacionService],
        }).compile();
        service = module.get(verificacion_service_1.VerificacionService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=verificacion.service.spec.js.map