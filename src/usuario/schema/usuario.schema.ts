/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop()
  nombres: string;

  @Prop()
  apellidos: string;

  @Prop()
  nombreUsuario: string;

  @Prop()
  genero: string;

  @Prop()
  correo: string;

  @Prop()
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
