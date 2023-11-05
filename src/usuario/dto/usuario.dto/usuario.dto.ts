/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class UsuarioDto {
    @IsString()
    "nombre": string;
}
