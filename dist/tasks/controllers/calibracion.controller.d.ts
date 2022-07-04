import { CalibracionService } from './../services/calibracion.service';
export declare class CalibracionController {
    private actividadesService;
    constructor(actividadesService: CalibracionService);
    findAll(): Promise<import("../entities/calibracion.entity").calibracion[]>;
    create(body: any): Promise<import("../entities/calibracion.entity").calibracion[]>;
    update(id: number, body: any): Promise<import("../entities/calibracion.entity").calibracion>;
    delete(id: number): Promise<boolean>;
}
