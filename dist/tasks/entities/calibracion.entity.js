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
exports.calibracion = void 0;
const typeorm_1 = require("typeorm");
let calibracion = class calibracion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], calibracion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "id_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "nombre_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "tipo_actividad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "laboratorio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], calibracion.prototype, "fecha_realizacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], calibracion.prototype, "fecha_agendar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "estado_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], calibracion.prototype, "descripcion", void 0);
calibracion = __decorate([
    (0, typeorm_1.Entity)()
], calibracion);
exports.calibracion = calibracion;
//# sourceMappingURL=calibracion.entity.js.map