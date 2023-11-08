/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  static find(arg0: { nombre: { $exists: boolean; }; }) {
    throw new Error('Method not implemented.');
  }
  @Prop()
  nombre: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
