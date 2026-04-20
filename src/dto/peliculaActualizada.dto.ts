import { IsInt, IsNotEmpty, IsString ,IsOptional} from 'class-validator';


export class PeliculaActualizadaDto {
    @IsInt()  
    @IsOptional()  
    id?: number;

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