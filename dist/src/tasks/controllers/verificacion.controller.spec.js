"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const verificacion_controller_1 = require("./verificacion.controller");
describe('VerificacionController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [verificacion_controller_1.VerificacionController],
        }).compile();
        controller = module.get(verificacion_controller_1.VerificacionController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=verificacion.controller.spec.js.map