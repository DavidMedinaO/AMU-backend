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
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividades = void 0;
const typeorm_1 = require("typeorm");
let actividades = class actividades {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], actividades.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "tipo_actividad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "variable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], actividades.prototype, "fecha_progamada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "reponsable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "laboratorio_encargado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], actividades.prototype, "estado_actividad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], actividades.prototype, "seriado_certificado", void 0);
actividades = __decorate([
    (0, typeorm_1.Entity)()
], actividades);
exports.actividades = actividades;
//# sourceMappingURL=actividades.entity.js.map