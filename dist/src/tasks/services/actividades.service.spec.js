"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const actividades_service_1 = require("./actividades.service");
describe('actividadesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [actividades_service_1.actividadesService],
        }).compile();
        service = module.get(actividades_service_1.actividadesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=actividades.service.spec.js.map