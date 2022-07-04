import { EventosService } from './../services/eventos.service';
export declare class EventosController {
    private actividadesService;
    constructor(actividadesService: EventosService);
    findAll(): Promise<import("../entities/eventos.entity").eventos[]>;
    create(body: any): Promise<import("../entities/eventos.entity").eventos[]>;
    update(id: number, body: any): Promise<import("../entities/eventos.entity").eventos>;
    delete(id: number): Promise<boolean>;
}
