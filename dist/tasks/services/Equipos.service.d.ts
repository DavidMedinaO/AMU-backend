import { Repository } from 'typeorm';
import { Equipos } from '../entities/Equipos.entity';
export declare class EquiposService {
    private EquiposRepo;
    constructor(EquiposRepo: Repository<Equipos>);
    findAll(): Promise<Equipos[]>;
    findOne(id: number): Promise<Equipos>;
    create(body: any): Promise<Equipos[]>;
    update(id: number, body: any): Promise<Equipos>;
    remove(id: number): Promise<boolean>;
}
