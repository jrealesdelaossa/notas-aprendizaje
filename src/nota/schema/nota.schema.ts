/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Usuario } from 'src/usuario/schema/usuario.schema';

export type NotaDocument = HydratedDocument<Nota>;

@Schema()
export class Nota {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  nota: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  })
  usuario: Usuario;
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
