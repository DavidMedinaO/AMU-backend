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
exports.VerificacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const verificacion_entity_1 = require("./../entities/verificacion.entity");
let VerificacionService = class VerificacionService {
    constructor(ActiRepo) {
        this.ActiRepo = ActiRepo;
    }
    findAll() {
        return this.ActiRepo.find();
    }
    findOne(seriado_certificado) {
        return this.ActiRepo.findOne(seriado_certificado);
    }
    create(body) {
        const newTask = this.ActiRepo.create(body);
        return this.ActiRepo.save(newTask);
    }
    async update(id, body) {
        const task = await this.ActiRepo.findOne(id);
        this.ActiRepo.merge(task, body);
        return this.ActiRepo.save(task);
    }
    async remove(id) {
        await this.ActiRepo.delete(id);
        return true;
    }
};
VerificacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(verificacion_entity_1.verificacion)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VerificacionService);
exports.VerificacionService = VerificacionService;
//# sourceMappingURL=verificacion.service.js.map