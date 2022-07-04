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
exports.eventos = void 0;
const typeorm_1 = require("typeorm");
let eventos = class eventos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], eventos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "id_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "nombre_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "tipo_actividad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "laboratorio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], eventos.prototype, "fecha_realizacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], eventos.prototype, "fecha_agendar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "estado_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], eventos.prototype, "descripcion", void 0);
eventos = __decorate([
    (0, typeorm_1.Entity)()
], eventos);
exports.eventos = eventos;
//# sourceMappingURL=eventos.entity.js.map