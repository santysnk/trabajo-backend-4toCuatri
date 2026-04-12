import { Module } from '@nestjs/common';
import { PeliculaController } from './app.controller';
import { PeliculaService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { Pelicula } from './entities/peli.entity';  

@Module({
  imports: [  
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'valula',
      database: 'pelis',
      entities: [Pelicula],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pelicula])
    ],
  controllers: [PeliculaController],
  providers: [PeliculaService],
})
export class AppModule {}
