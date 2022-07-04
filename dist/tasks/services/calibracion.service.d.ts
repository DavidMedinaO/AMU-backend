import { Repository } from 'typeorm';
import { calibracion } from './../entities/calibracion.entity';
export declare class CalibracionService {
    private ActiRepo;
    constructor(ActiRepo: Repository<calibracion>);
    findAll(): Promise<calibracion[]>;
    findOne(seriado_certificado: number): Promise<calibracion>;
    create(body: any): Promise<calibracion[]>;
    update(id: number, body: any): Promise<calibracion>;
    remove(id: number): Promise<boolean>;
}
