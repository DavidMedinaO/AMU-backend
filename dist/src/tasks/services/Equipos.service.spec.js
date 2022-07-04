"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Equipos_service_1 = require("./Equipos.service");
describe('EquiposService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [Equipos_service_1.EquiposService],
        }).compile();
        service = module.get(Equipos_service_1.EquiposService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=Equipos.service.spec.js.map