/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schema/usuario.schema';
import { UsuarioDto } from './dto/usuario.dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  crearUsuario(nombre: UsuarioDto) {
    const nuevoUsuario = new this.usuarioModel(nombre);
    return nuevoUsuario.save();
  }
  buscar() {
    return this.usuarioModel.find();
  }

  borrar(id: string) {
    //elimina un elemento por id
    return this.usuarioModel.findByIdAndDelete({ _id: id });
  }

  actualizar(id: string, nuevo: any) {
    return this.usuarioModel.findOneAndUpdate(
      { _id: id },
      { nombre: nuevo.nombre },
      { new: true },
    );
  }
}
 