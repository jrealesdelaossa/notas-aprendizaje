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
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './dto/usuario.dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('crear')
  crearUsuario(@Body() nombre: UsuarioDto) {
    console.log(nombre);

    return this.usuarioService.crearUsuario(nombre);
  }

  @Get('buscar')
  buscar() {
    return this.usuarioService.buscar();
  }

  @Get('login')
  async obtener(@Body() payload: any) {
    console.log(payload);
    return await this.usuarioService.obtener(payload);
  }

  @Delete('borrar')
  async borrar() {
    console.log();
    return await this.usuarioService.borrar();
  }

  @Delete('eliminar')
  eliminarUsuario() {
    return null;
  }

  @Put('actualizar/:_id')
  actualizar(@Param('_id') id: string, @Body() nuevo: any) {
    return this.usuarioService.actualizar(id, nuevo);
  }

  @Delete('borrar-todos')
  eliminarTodos() {
    return this.usuarioService.eliminarTodos();
  }
}
