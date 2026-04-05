import { Module } from '@nestjs/common';
import { PeliculaController } from './app.controller';
import { PeliculaService } from './app.service';

@Module({
  imports: [],
  controllers: [PeliculaController],
  providers: [PeliculaService],
})
export class AppModule {}
