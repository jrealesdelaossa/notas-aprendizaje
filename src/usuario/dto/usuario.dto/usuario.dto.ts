/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MaxLength } from 'class-validator';

export class UsuarioDto {
  @MaxLength(50)
  @IsString()
  nombres: string;

  @MaxLength(50)
  @IsString()
  apellidos: string;

  @IsString()
  @MaxLength(50)
  nombreUsuario: string;

  @IsString()
  genero: string;

  @IsEmail()
  correo: string;

  @IsString()
  password: string;
}
