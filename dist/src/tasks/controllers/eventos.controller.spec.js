"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const eventos_controller_1 = require("./eventos.controller");
describe('EventosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [eventos_controller_1.EventosController],
        }).compile();
        controller = module.get(eventos_controller_1.EventosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=eventos.controller.spec.js.map