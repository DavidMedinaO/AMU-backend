"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const eventos_service_1 = require("./eventos.service");
describe('EventosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [eventos_service_1.EventosService],
        }).compile();
        service = module.get(eventos_service_1.EventosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=eventos.service.spec.js.map