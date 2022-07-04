"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const variablesxequipo_controller_1 = require("./variablesxequipo.controller");
describe('VariablesxequipoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [variablesxequipo_controller_1.VariablesxequipoController],
        }).compile();
        controller = module.get(variablesxequipo_controller_1.VariablesxequipoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=variablesxequipo.controller.spec.js.map