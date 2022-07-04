import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { appendFile } from 'fs';
import { AppModule } from 'src/app.module';
import { variablesxequipo } from '../entities/variablesxequipo.entity';
import { VariablesxequipoService} from '../services/variablesxequipo.service';

@Controller('api/variablesxequipo')
export class VariablesxequipoController {

    constructor(
        private vxeService: VariablesxequipoService
      ) {}

   
    @Get()
    findAll() {
    return this.vxeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.vxeService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
    
        return this.vxeService.create(body);
    }

    /*@Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.vxeService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.vxeService.remove(id);
    }*/
}
