import { Injectable } from '@nestjs/common';
import { Pelicula } from './interfaces/Pelicula.interface';

@Injectable()
export class PeliculaService {

  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'El Padrino', director: 'Francis Ford Coppola', anio: 1972 },
    { id: 2, titulo: 'Volver al Futuro', director: 'Robert Zemeckis', anio: 1985 },
    { id: 3, titulo: 'El Secreto de sus Ojos', director: 'Juan Jose Campanella', anio: 2009 },
  ];

  getPeliculasService(): Pelicula[] {
    return this.peliculas;
  }

  postPeliculaService(nuevaPelicula: Pelicula): string {
    console.log("Nueva pelicula:", nuevaPelicula);

    this.peliculas.push(nuevaPelicula);
    console.log("\npeliculas");
	 console.log("---------------------");
	 console.table(this.peliculas);

    return 'Pelicula agregada correctamente!';
  }

  deletePeliculaService(idPelicula: number): string {
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
  }

}
