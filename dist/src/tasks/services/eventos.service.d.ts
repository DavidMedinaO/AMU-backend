import { Repository } from 'typeorm';
import { eventos } from './../entities/eventos.entity';
export declare class EventosService {
    private ActiRepo;
    constructor(ActiRepo: Repository<eventos>);
    findAll(): Promise<eventos[]>;
    findOne(seriado_certificado: number): Promise<eventos>;
    create(body: any): Promise<eventos[]>;
    update(id: number, body: any): Promise<eventos>;
    remove(id: number): Promise<boolean>;
}
