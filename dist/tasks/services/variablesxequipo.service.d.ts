import { Repository } from 'typeorm';
import { variablesxequipo } from './../entities/variablesxequipo.entity';
export declare class VariablesxequipoService {
    private axeRepo;
    constructor(axeRepo: Repository<variablesxequipo>);
    findAll(): Promise<variablesxequipo[]>;
    findOne(id: number): Promise<variablesxequipo>;
    create(body: any): Promise<variablesxequipo[]>;
}
