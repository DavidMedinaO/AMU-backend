import { MantenimientoService } from './../services/mantenimiento.service';
export declare class MantenimientoController {
    private actividadesService;
    constructor(actividadesService: MantenimientoService);
    findAll(): Promise<import("../entities/mantenimiento.entity").mantenimiento[]>;
    create(body: any): Promise<import("../entities/mantenimiento.entity").mantenimiento[]>;
    update(id: number, body: any): Promise<import("../entities/mantenimiento.entity").mantenimiento>;
    delete(id: number): Promise<boolean>;
}
