import { VerificacionService } from './../services/verificacion.service';
export declare class VerificacionController {
    private actividadesService;
    constructor(actividadesService: VerificacionService);
    findAll(): Promise<import("../entities/verificacion.entity").verificacion[]>;
    create(body: any): Promise<import("../entities/verificacion.entity").verificacion[]>;
    update(id: number, body: any): Promise<import("../entities/verificacion.entity").verificacion>;
    delete(id: number): Promise<boolean>;
}
