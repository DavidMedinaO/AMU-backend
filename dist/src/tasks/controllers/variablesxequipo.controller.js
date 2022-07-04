"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablesxequipoController = void 0;
const common_1 = require("@nestjs/common");
const variablesxequipo_service_1 = require("../services/variablesxequipo.service");
let VariablesxequipoController = class VariablesxequipoController {
    constructor(vxeService) {
        this.vxeService = vxeService;
    }
    findAll() {
        return this.vxeService.findAll();
    }
    findOne(id) {
        return this.vxeService.findOne(id);
    }
    create(body) {
        return this.vxeService.create(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VariablesxequipoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VariablesxequipoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VariablesxequipoController.prototype, "create", null);
VariablesxequipoController = __decorate([
    (0, common_1.Controller)('api/variablesxequipo'),
    __metadata("design:paramtypes", [variablesxequipo_service_1.VariablesxequipoService])
], VariablesxequipoController);
exports.VariablesxequipoController = VariablesxequipoController;
//# sourceMappingURL=variablesxequipo.controller.js.map