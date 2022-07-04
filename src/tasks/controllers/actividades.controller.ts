import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { appendFile } from 'fs';
import { AppModule } from 'src/app.module';
import { Task } from '../entities/task.entity';
import { actividadesService} from './../services/actividades.service';


@Controller('api/actividades/')
export class actividadesController {
    
    constructor(
        private actividadesService: actividadesService
      ) {}

    @Get()
    findAll() {
        return this.actividadesService.findAll();
    }

    @Get(':tipo_actividad')
    findByUsername(@Param('tipo_actividad') tipo_actividad: string) {
        //return id;
        
        return this.actividadesService.findOne(2457);
    }


    @Post()
    create(@Body() body: any) {
    
        return this.actividadesService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.actividadesService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.actividadesService.remove(id);
    }
}
