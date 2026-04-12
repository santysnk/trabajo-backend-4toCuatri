import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PeliculaService } from './app.service';
import { Pelicula } from './entities/peli.entity';
import { PeliculaDto } from './dto/pelicula.dto';

// http://localhost:3000/peliculas

@Controller('/peliculas')
export class PeliculaController {

  private readonly peliculaService: PeliculaService;

  constructor(peliculaService: PeliculaService) {
    this.peliculaService = peliculaService;
  }

  @Get() //obtener
  getPeliculaController(): Promise<Pelicula[]> {
    return this.peliculaService.getPeliculaService();
  }

  @Post() //agregar
  postPeliculaController(@Body() nuevaPelicula: PeliculaDto): Promise<string> {
    return this.peliculaService.postPeliculaService(nuevaPelicula);
  }

  /*@Delete() //eliminar
  async deletePeliculaController(@Body() body: { id: number }): Promise<string> {
    return this.peliculaService.deletePeliculaService(body.id);
  }

  @Put() //modificar
  async putPeliculaController(@Body() peliculaActualizada: Pelicula): Promise<string> {
    return this.peliculaService.putPeliculaService(peliculaActualizada);
  }*/
}
