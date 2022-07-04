import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { variablesxequipo } from './../entities/variablesxequipo.entity';


@Injectable()
export class VariablesxequipoService {
    constructor(
        @InjectRepository(variablesxequipo) private axeRepo: Repository<variablesxequipo>,
      ) {}

      findAll() {
        return this.axeRepo.find();
      }
    
      findOne(id: number) {
        return this.axeRepo.findOne(id);
      }
    
      //crear una nueva tarea 
      create(body: any) {
        const newTask = this.axeRepo.create(body);
        return this.axeRepo.save(newTask);
      }
    
      /*async update(id: number, body: any) {
        const task = await this.axeRepo.findOne(id);
        this.axeRepo.merge(task, body);
        return this.axeRepo.save(task);
      }
    
      async remove(id: number) {
        await this.axeRepo.delete(id);
        return true;
      }*/




}
