/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaDto } from './dto/nota.dto/nota.dto';
import { Usuario } from 'src/usuario/schema/usuario.schema';

@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Post('crear')
  crearNota(@Body() nota: NotaDto) {
    console.log(nota);

    return this.notaService.crearNota(nota);
  }

  @Get('obtener')
  obtenerNotas() {
    return this.notaService.obtenerNotas();
  }

  @Get('obtener-por-id/:_id')
  async obtenerPorId(@Param('_id') id: string) {
    return await this.notaService.obtenerPorId(id);
  }

  /**
   * Generalmente para separar palabras en las rutas
   * se usan los guiones (-)
   * @param titulo
   */
  @Get('obtener-titulo/:titulo')
  obtenerTitulo(@Param('titulo') titulo: string) {
    //ruta para buscar por titulo -> obtener-titulo/titulo a buscar
    return this.notaService.obtenerTitulo(titulo);
  }

  @Delete('borrar-Elemento/:_id')
  borrar(@Param('_id') id: string) {
    return this.notaService.borrar(id);
  }

  @Put('actualizar/:_id')
  actualizar(@Param('_id') id: string, @Body() nuevoTitulo: NotaDto) {
    return this.notaService.actualizar(id, nuevoTitulo);
  }

  @Get(':id')
  obtener(@Param('id') usuario: Usuario) {
    return this.notaService.obtener(usuario);
  }

  @Delete('eliminar/:id')
  async eliminar(@Param('id') id: string) {
    return await this.notaService.borrar(id);
  }

  @Delete('eliminar-todos')
  async eliminarTodos() {
    return await this.notaService.eliminarTodos();
  }
}
