import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class verificacion {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_equipo: string;

  @Column()
  nombre_equipo: string;

  @Column()
  tipo_actividad: string;

  @Column()
  laboratorio: String;

  @Column()
  responsable: string;

  @Column()
  fecha_realizacion: Date;

  @Column()
  fecha_agendar: Date;

  @Column()
  estado_equipo: String;

  @Column()
  descripcion: String;


}