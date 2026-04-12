import { IsInt, IsNotEmpty, IsString } from 'class-validator';


export class PeliculaDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  director!: string;

  @IsInt()
  @IsNotEmpty()
  anio!: number;
}
