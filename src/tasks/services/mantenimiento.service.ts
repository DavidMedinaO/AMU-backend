import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { mantenimiento } from './../entities/mantenimiento.entity';

@Injectable()
export class MantenimientoService {

    constructor(
        @InjectRepository(mantenimiento) private ActiRepo: Repository<mantenimiento>,
      ) {}
    

      //
      findAll() {
        return this.ActiRepo.find();
      }
    
      findOne(seriado_certificado: number) {
        return this.ActiRepo.findOne(seriado_certificado);
      }
  
      //crear una nueva tarea 
      create(body: any) {
        const newTask = this.ActiRepo.create(body);
        return this.ActiRepo.save(newTask);
      }
    
      async update(id: number, body: any) {
        const task = await this.ActiRepo.findOne(id);
        this.ActiRepo.merge(task, body);
        return this.ActiRepo.save(task);
      }
    
      async remove(id: number) {
        await this.ActiRepo.delete(id);
        return true;
      }

}
