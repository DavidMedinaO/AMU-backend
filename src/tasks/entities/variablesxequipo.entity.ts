import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class variablesxequipo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_equipo: number;

  @Column()
  nombre_equipo: string;

  @Column("simple-array")
  variables: string[];

}
