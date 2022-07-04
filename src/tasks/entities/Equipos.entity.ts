import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipos {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  serie: string;
  
  @Column()
  nombre_generico: string;

  @Column()
  marca: string;

  @Column()
  modelo: string; 

  @Column()
  fecha_ultima_actividad: string;

  @Column()
  estado: string;

}