import { IsInt, IsNotEmpty, IsString } from 'class-validator';


export class PeliculaActualizadaDto {
    @IsInt()    
    @IsNotEmpty()
    id!: number;

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