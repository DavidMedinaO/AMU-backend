import { Repository } from 'typeorm';
import { actividades } from './../entities/actividades.entity';
export declare class actividadesService {
    private ActiRepo;
    constructor(ActiRepo: Repository<actividades>);
    findAll(): Promise<actividades[]>;
    findOne(seriado_certificado: number): Promise<actividades>;
    findByUsername(tipo_actividad: string): Promise<actividades | undefined>;
    create(body: any): Promise<actividades[]>;
    update(id: number, body: any): Promise<actividades>;
    remove(id: number): Promise<boolean>;
}
