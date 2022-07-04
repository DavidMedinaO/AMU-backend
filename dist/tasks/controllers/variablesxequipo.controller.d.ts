import { variablesxequipo } from '../entities/variablesxequipo.entity';
import { VariablesxequipoService } from '../services/variablesxequipo.service';
export declare class VariablesxequipoController {
    private vxeService;
    constructor(vxeService: VariablesxequipoService);
    findAll(): Promise<variablesxequipo[]>;
    findOne(id: number): Promise<variablesxequipo>;
    create(body: any): Promise<variablesxequipo[]>;
}
