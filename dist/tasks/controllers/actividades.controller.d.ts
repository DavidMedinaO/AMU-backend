import { actividadesService } from './../services/actividades.service';
export declare class actividadesController {
    private actividadesService;
    constructor(actividadesService: actividadesService);
    findAll(): Promise<import("../entities/actividades.entity").actividades[]>;
    findByUsername(tipo_actividad: string): Promise<import("../entities/actividades.entity").actividades>;
    create(body: any): Promise<import("../entities/actividades.entity").actividades[]>;
    update(id: number, body: any): Promise<import("../entities/actividades.entity").actividades>;
    delete(id: number): Promise<boolean>;
}
