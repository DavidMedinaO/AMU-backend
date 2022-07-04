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
exports.actividadesController = void 0;
const common_1 = require("@nestjs/common");
const actividades_service_1 = require("./../services/actividades.service");
let actividadesController = class actividadesController {
    constructor(actividadesService) {
        this.actividadesService = actividadesService;
    }
    findAll() {
        return this.actividadesService.findAll();
    }
    findByUsername(tipo_actividad) {
        return this.actividadesService.findOne(2457);
    }
    create(body) {
        return this.actividadesService.create(body);
    }
    update(id, body) {
        return this.actividadesService.update(id, body);
    }
    delete(id) {
        return this.actividadesService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], actividadesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':tipo_actividad'),
    __param(0, (0, common_1.Param)('tipo_actividad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], actividadesController.prototype, "findByUsername", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], actividadesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], actividadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], actividadesController.prototype, "delete", null);
actividadesController = __decorate([
    (0, common_1.Controller)('api/actividades/'),
    __metadata("design:paramtypes", [actividades_service_1.actividadesService])
], actividadesController);
exports.actividadesController = actividadesController;
//# sourceMappingURL=actividades.controller.js.map