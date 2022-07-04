import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { appendFile } from 'fs';
import { AppModule } from 'src/app.module';
import { Task } from '../entities/task.entity';
import { EquiposService} from '../services/Equipos.service';


@Controller('api/equipos')
export class EquiposController {
    
    constructor(
        private equiposService: EquiposService
      ) {}

   
    @Get()
    findAll() {
    return this.equiposService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.equiposService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
    
        return this.equiposService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.equiposService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.equiposService.remove(id);
    }
}
