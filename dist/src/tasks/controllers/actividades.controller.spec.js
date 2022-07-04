"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const actividades_controller_1 = require("./actividades.controller");
describe('EquiposController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [actividades_controller_1.actividadesController],
        }).compile();
        controller = module.get(actividades_controller_1.actividadesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=actividades.controller.spec.js.map