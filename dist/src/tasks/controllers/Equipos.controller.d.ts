import { EquiposService } from '../services/Equipos.service';
export declare class EquiposController {
    private equiposService;
    constructor(equiposService: EquiposService);
    findAll(): Promise<import("../entities/Equipos.entity").Equipos[]>;
    findOne(id: number): Promise<import("../entities/Equipos.entity").Equipos>;
    create(body: any): Promise<import("../entities/Equipos.entity").Equipos[]>;
    update(id: number, body: any): Promise<import("../entities/Equipos.entity").Equipos>;
    delete(id: number): Promise<boolean>;
}
