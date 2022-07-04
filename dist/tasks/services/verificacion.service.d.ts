import { Repository } from 'typeorm';
import { verificacion } from './../entities/verificacion.entity';
export declare class VerificacionService {
    private ActiRepo;
    constructor(ActiRepo: Repository<verificacion>);
    findAll(): Promise<verificacion[]>;
    findOne(seriado_certificado: number): Promise<verificacion>;
    create(body: any): Promise<verificacion[]>;
    update(id: number, body: any): Promise<verificacion>;
    remove(id: number): Promise<boolean>;
}
