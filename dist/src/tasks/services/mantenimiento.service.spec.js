"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mantenimiento_service_1 = require("./mantenimiento.service");
describe('MantenimientoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [mantenimiento_service_1.MantenimientoService],
        }).compile();
        service = module.get(mantenimiento_service_1.MantenimientoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=mantenimiento.service.spec.js.map