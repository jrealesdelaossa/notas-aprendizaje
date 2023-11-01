/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaController } from './nota.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nota, NotaSchema } from './schema/nota.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Nota.name, schema: NotaSchema }]),
  ],
  controllers: [NotaController],
  providers: [NotaService],
})
export class NotaModule {}
