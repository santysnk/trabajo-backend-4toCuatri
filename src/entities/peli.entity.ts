import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number = 0 ;

  @Column()
  titulo: string = '';

  @Column()
  director: string = '';

  @Column()
  anio: number = 0;
}