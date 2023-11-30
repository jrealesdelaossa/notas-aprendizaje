/* eslint-disable prettier/prettier */
import {  Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from './schema/nota.schema';
import { NotaDto } from './dto/nota.dto/nota.dto';
import { Usuario } from 'src/usuario/schema/usuario.schema';

@Injectable()
export class NotaService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  async crearNota(nota: NotaDto): Promise<any | string> {
    try {
      const existeN = await this.obtenerTitulo(nota.titulo);
      if (existeN.length != 0) {
        return 'el nombre de la nota que intenta crear ya existe';
      } else {
        // convertir string usuario a object id
        const nuevaNota = new this.notaModel(nota);
        const response = nuevaNota.save();
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }

  obtenerNotas() {
    return this.notaModel.find();
  }

  async obtenerPorId(id: string): Promise<any> {
    try {
      const notas = await this.notaModel.find({ usuario: id });
      return notas;
    } catch (error) {
      console.log(error);
    }
  }

  obtenerTitulo(titulo: string) {
    //buscar un elemento especifico
    return this.notaModel.find({ titulo: titulo });
  }

  async borrar(id: string) {
    //elimina un elemento por id
    return await this.notaModel.findByIdAndDelete(id);
  }

  actualizar(id: string, nuevoTitulo: NotaDto) {
    return this.notaModel.findOneAndUpdate(
      { _id: id },
      { titulo: nuevoTitulo.titulo },
      { new: true },
    );
  }

  async obtener(usuario: Usuario) {
    return this.notaModel
      .find({ usuario: usuario })
      .populate('Usuario') // Traer la información del perfil
      .exec(); // Ejecutar la consulta
  }

  async eliminarTodos() {
    return await this.notaModel.deleteMany();
  }
}
