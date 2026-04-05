import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PeliculaService } from './app.service';
import type { Pelicula } from './interfaces/Pelicula.interface';

// http://localhost:3000/peliculas

@Controller('/peliculas')
export class PeliculaController {

  private readonly peliculaService: PeliculaService;

  constructor(peliculaService: PeliculaService) {
    this.peliculaService = peliculaService;
  }

  @Get() //obtener
  getPeliculasController(): Pelicula[] {
    return this.peliculaService.getPeliculasService();
  }

  @Post() //agregar
  postPeliculaController(@Body() nuevaPelicula: Pelicula): string {
    return this.peliculaService.postPeliculaService(nuevaPelicula);
  }

  @Delete() //eliminar
  deletePeliculaController(@Body() body: { id: number }): string {
    return this.peliculaService.deletePeliculaService(body.id);
  }

  @Put() //modificar
  putPeliculaController(@Body() peliculaActualizada: Pelicula): string {
    return this.peliculaService.putPeliculaService(peliculaActualizada);
  }
}
