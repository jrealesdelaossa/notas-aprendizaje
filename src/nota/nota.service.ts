import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from './schema/nota.schema';

@Injectable()
export class NotaService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  crearNota(nota: any) {
    const nuevaNota = new this.notaModel(nota);
    return nuevaNota.save();
  }

  obtenerNotas() {
    return this.notaModel.find();
  }

  obtenerTitulo(titulo: string) {
    return this.notaModel.find({ titulo: titulo });
  }
}
