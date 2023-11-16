import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/usuario/schema/usuario.schema';

@Injectable()
export class AutorService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}
  async create(createAutorDto: any) {
    const nuevoAutor = new this.usuarioModel(createAutorDto);
    return await nuevoAutor.save();
  }

  findAll() {
    return `This action returns all autor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }

  eliminarTodos() {
    return this.usuarioModel.deleteMany();
  }
}
