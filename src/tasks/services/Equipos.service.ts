import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipos } from '../entities/Equipos.entity';


@Injectable()
export class EquiposService {
    constructor(
        @InjectRepository(Equipos) private EquiposRepo: Repository<Equipos>,
      ) {}
    

      //
      findAll() {
        return this.EquiposRepo.find();
      }
    
      findOne(id: number) {
        return this.EquiposRepo.findOne(id);
      }
    
      //crear una nueva tarea 
      create(body: any) {
        // const newTask = new Equipos();
        // newTask.codigo = body.codigo;
        // newTask.serie = body.serie;
        // newTask.nombre_especifico = body.nombre_especifico;
        // newTask.nombre_generico = body.nombre_generico;
        // newTask.marca = body.marca;
        // newTask.modelo = body.modelo;
        // newTask.fecha_ultima_actividad = body.fecha_ultima_actividad;
        // newTask.estado = body.estado;
        const newTask = this.EquiposRepo.create(body);
        return this.EquiposRepo.save(newTask);
      }
    
      async update(id: number, body: any) {
        const task = await this.EquiposRepo.findOne(id);
        this.EquiposRepo.merge(task, body);
        return this.EquiposRepo.save(task);
      }
    
      async remove(id: number) {
        await this.EquiposRepo.delete(id);
        return true;
      }


}
