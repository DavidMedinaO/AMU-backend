import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class actividades {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipo: string;

  @Column()
  tipo_actividad: string;

  @Column()
  variable: string;

  @Column()
  fecha_progamada: Date;

  @Column()
  reponsable: String;

  @Column()
  laboratorio_encargado: String;

  @Column()
  estado_actividad: String;

  @Column()
  seriado_certificado: number;

}