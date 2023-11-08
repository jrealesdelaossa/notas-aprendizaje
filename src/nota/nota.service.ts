/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Nota } from './schema/nota.schema';
import { NotaDto } from './dto/nota.dto/nota.dto';
import { Usuario } from 'src/usuario/schema/usuario.schema';




@Injectable()
export class NotaService {
  constructor(@InjectModel(Nota.name) private notaModel: Model<Nota>) {}

  async crearNota(nota: NotaDto , usuario: any) { 
    const existeN= await this.obtenerTitulo(nota.titulo);
    if(existeN.length!=0){
      return "el nombre de la nota que intenta crear ya existe";
    }else{
    const nuevaNota = new this.notaModel(nota,usuario);
    return nuevaNota.save();
    }
    
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

  actualizar(id: string, nuevoTitulo:NotaDto) {
    return this.notaModel.findOneAndUpdate(
      { _id: id },
      { titulo: nuevoTitulo.titulo },
      { new: true}
    );
  }

  async obtener(usuario: Usuario ) {
    return this.notaModel.find(
      { usuario: usuario})
      .populate('Usuario') // Traer la información del perfil
      .exec() // Ejecutar la consulta
  }

  

}
