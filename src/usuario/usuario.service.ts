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

  async obtener(payload: any) {
    try{
      const usuario = await this.usuarioModel.findOne(
        {
        nombreUsuario: payload.nombreUsuario,
        password: payload.password,
        },
      ).exec();
      return usuario;
    }catch(error){
      console.log(error)
    }
  }

  async borrar(): Promise<any> {
    //elimina un elemento por id
  }

  actualizar(id: string, nuevo: any) {
    return this.usuarioModel.findOneAndUpdate(
      { _id: id },
      { nombre: nuevo.nombre },
      { new: true },
    );
  }

  eliminarTodos() {
    return this.usuarioModel.deleteMany();
  }
}
