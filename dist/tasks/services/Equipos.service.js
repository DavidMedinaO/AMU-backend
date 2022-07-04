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
exports.EquiposService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Equipos_entity_1 = require("../entities/Equipos.entity");
let EquiposService = class EquiposService {
    constructor(EquiposRepo) {
        this.EquiposRepo = EquiposRepo;
    }
    findAll() {
        return this.EquiposRepo.find();
    }
    findOne(id) {
        return this.EquiposRepo.findOne(id);
    }
    create(body) {
        const newTask = this.EquiposRepo.create(body);
        return this.EquiposRepo.save(newTask);
    }
    async update(id, body) {
        const task = await this.EquiposRepo.findOne(id);
        this.EquiposRepo.merge(task, body);
        return this.EquiposRepo.save(task);
    }
    async remove(id) {
        await this.EquiposRepo.delete(id);
        return true;
    }
};
EquiposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Equipos_entity_1.Equipos)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EquiposService);
exports.EquiposService = EquiposService;
//# sourceMappingURL=Equipos.service.js.map