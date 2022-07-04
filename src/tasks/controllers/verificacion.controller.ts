import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { appendFile } from 'fs';
import { AppModule } from 'src/app.module';
import { VerificacionService} from './../services/verificacion.service';

@Controller('/api/eventos/verificacion')
export class VerificacionController {

    constructor(
        private actividadesService: VerificacionService
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
