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

@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Post('crear')
  crearNota(@Body() nota: any) {
    return this.notaService.crearNota(nota);
  }

  @Get('obtener')
  obtenerNotas() {
    return this.notaService.obtenerNotas();
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

  @Delete('borrar-Elemento/:titulo')
  borrar(@Param('titulo') titulo: string) {
    return this.notaService.borrar(titulo);
  }

  @Put('actualizar/:titulo')
  actualizar(@Param('titulo') titulo: string, @Body() nuevoTitulo: any) {
    return this.notaService.actualizar(titulo, nuevoTitulo);
  }
}
