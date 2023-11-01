/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Usuario } from 'src/usuario/schema/usuario.schema';

export type NotaDocument = HydratedDocument<Nota>;

@Schema()
export class Nota {
  @Prop()
  titulo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' })
  usuario: Usuario;
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
