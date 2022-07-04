import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { actividades } from './../entities/actividades.entity';


@Injectable()
export class actividadesService {
    constructor(
        @InjectRepository(actividades) private ActiRepo: Repository<actividades>,
      ) {}
    

      //
      findAll() {
        return this.ActiRepo.find();
      }
    
      findOne(seriado_certificado: number) {
        return this.ActiRepo.findOne(seriado_certificado);
      }
    
      findByUsername(tipo_actividad: string): Promise<actividades | undefined> {
        const user = getRepository(actividades)
          .createQueryBuilder("actividades")
          .where("actividades.tipo_actividad = :tipo_actividad", { tipo_actividad: tipo_actividad })
          .getOne();
    
        return user;
      }
      //crear una nueva tarea 
      create(body: any) {
        // const newTask = new actividades();
        // newTask.Equipo = body.Equipo;
        // newTask.tipo_actividad = body.tipo_actividad;
        // newTask.fecha_progamada = body.fecha_progamada;
        // newTask.reponsable = body.reponsable;
        // newTask.laboratorio_encargado = body.laboratorio_encargado;
        // newTask.estado_actividad = body.estado_actividad;
        // newTask.seriado_certificado = body.seriado_certificado;
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
