import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    this.notaService.obtenerNotas();
  }

  /**
   * Generalmente para separar palabras en las rutas
   * se usan los guiones (-)
   * @param titulo
   */
  @Get('obtener-titulo/:titulo')
  obtenerTitulo(@Param('titulo') titulo: string) {
    this.notaService.obtenerTitulo(titulo);
  }
}
