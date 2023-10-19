import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotaDocument = HydratedDocument<Nota>;

@Schema()
export class Nota {
  @Prop()
  titulo: string;
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
