import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/peli.entity';
import { PeliculaDto } from './dto/pelicula.dto';

@Injectable()
export class PeliculaService {
	
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculasRepository: Repository<Pelicula>
  ) {}

  getPeliculaService(): Promise<Pelicula[]> {
    return this.peliculasRepository.find();
  }

  async postPeliculaService(nuevaPelicula: PeliculaDto): Promise<string> {
    console.log('Nueva pelicula:', nuevaPelicula);

    await this.peliculasRepository.save(nuevaPelicula);
    console.log('\npeliculas');
    console.log('---------------------');
    console.table(await this.peliculasRepository.find());

    return 'Pelicula agregada correctamente!';
  }

  /*deletePeliculaService(idPelicula: number): string {
    const index = this.peliculas.findIndex(pelicula => pelicula.id === idPelicula);
    if (index !== -1) {
      this.peliculas.splice(index, 1);
      return 'Pelicula eliminada correctamente!';
    }
    return 'Pelicula no encontrada!';
  }

  putPeliculaService(peliculaActualizada: Pelicula): string {
    const index = this.peliculas.findIndex(pelicula => pelicula.id === peliculaActualizada.id);
    if (index !== -1) {
      this.peliculas[index] = peliculaActualizada;
      return 'Pelicula actualizada correctamente!';
    }
    return 'Pelicula no encontrada!';
  }*/
}
