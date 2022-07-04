"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mantenimiento_controller_1 = require("./mantenimiento.controller");
describe('MantenimientoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [mantenimiento_controller_1.MantenimientoController],
        }).compile();
        controller = module.get(mantenimiento_controller_1.MantenimientoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=mantenimiento.controller.spec.js.map