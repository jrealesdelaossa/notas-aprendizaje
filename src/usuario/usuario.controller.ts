import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('crear')
  crearUsuario(@Body() nombre: string) {
    return this.usuarioService.crearUsuario(nombre);
  }

  @Get('buscar')
  buscar() {
    return this.usuarioService.buscar();
  }
  @Delete('borrar/:_id')
  borrar(@Param('_id') id: string) {
    return this.usuarioService.borrar(id);
  }

  @Put('actualizar/:_id')
  actualizar(@Param('_id') id: string, @Body() nuevo: any) {
    return this.usuarioService.actualizar(id, nuevo);
  }
}
