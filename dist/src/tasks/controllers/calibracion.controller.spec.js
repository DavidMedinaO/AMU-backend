"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const calibracion_controller_1 = require("./calibracion.controller");
describe('CalibracionController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [calibracion_controller_1.CalibracionController],
        }).compile();
        controller = module.get(calibracion_controller_1.CalibracionController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=calibracion.controller.spec.js.map