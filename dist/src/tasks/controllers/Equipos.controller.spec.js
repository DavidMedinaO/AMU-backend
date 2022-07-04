"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Equipos_controller_1 = require("./Equipos.controller");
describe('EquiposController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [Equipos_controller_1.EquiposController],
        }).compile();
        controller = module.get(Equipos_controller_1.EquiposController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=Equipos.controller.spec.js.map