/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from './schema/nota.schema';

@Injectable()
export class NotaService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  crearNota(nota: any , usuario: any) { 
    const nuevaNota = new this.notaModel(nota,usuario);
    return nuevaNota.save();
    
  }

  obtenerNotas() {
    return this.notaModel.find();
  }

  obtenerTitulo(titulo: string) {
    //buscar un elemento especifico
    return this.notaModel.find(
      {  titulo: titulo }
    );
  }

  borrar(id: string) {
    //elimina un elemento por id
    return this.notaModel.findByIdAndDelete({ _id: id });
  }

  actualizar(id: string, nuevoTitulo: any) {
    return this.notaModel.findOneAndUpdate(
      { _id: id },
      { titulo: nuevoTitulo.titulo },
      { new: true}
    );
  }
}
