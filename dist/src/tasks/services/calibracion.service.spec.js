"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const calibracion_service_1 = require("./calibracion.service");
describe('CalibracionService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [calibracion_service_1.CalibracionService],
        }).compile();
        service = module.get(calibracion_service_1.CalibracionService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=calibracion.service.spec.js.map