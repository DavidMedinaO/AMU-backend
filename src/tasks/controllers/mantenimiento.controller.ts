import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { appendFile } from 'fs';
import { AppModule } from 'src/app.module';
import { MantenimientoService} from './../services/mantenimiento.service';



@Controller('api/eventos/mantenimiento')
export class MantenimientoController {

    constructor(
        private actividadesService: MantenimientoService
      ) {}

    @Get()
    findAll() {
        return this.actividadesService.findAll();
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
