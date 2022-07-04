import { Repository } from 'typeorm';
import { mantenimiento } from './../entities/mantenimiento.entity';
export declare class MantenimientoService {
    private ActiRepo;
    constructor(ActiRepo: Repository<mantenimiento>);
    findAll(): Promise<mantenimiento[]>;
    findOne(seriado_certificado: number): Promise<mantenimiento>;
    create(body: any): Promise<mantenimiento[]>;
    update(id: number, body: any): Promise<mantenimiento>;
    remove(id: number): Promise<boolean>;
}
