import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/peli.entity';
import { PeliculaDto } from './dto/pelicula.dto';
import { PeliculaActualizadaDto } from './dto/peliculaActualizada.dto';

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

  async putPeliculaService(id: number, peliculaActualizada: PeliculaActualizadaDto): Promise<string> {
    const peliculaExistente = await this.peliculasRepository.findOne({ where: { id: id } });
    if (peliculaExistente) {
      const peliActualizada = {...peliculaExistente, ...peliculaActualizada, id: id}
      await this.peliculasRepository.save(peliActualizada);
      return 'Pelicula actualizada correctamente!';
    }
    return 'Pelicula no encontrada!';
    }

  async deletePeliculaService(id: number): Promise<string> {
    const index = await this.peliculasRepository.findOne({ where: { id: Number(id) } });
    if (index) {
      await this.peliculasRepository.remove(index);
      return 'Pelicula eliminada correctamente!';
    }
    return 'Pelicula no encontrada!';
  } 
  
}
