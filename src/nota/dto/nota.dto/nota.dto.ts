import { IsMongoId, IsString } from 'class-validator';

export class NotaDto {
  @IsString()
  titulo: string;

  @IsString()
  nota: string;

  @IsMongoId()
  usuario: string;
}
