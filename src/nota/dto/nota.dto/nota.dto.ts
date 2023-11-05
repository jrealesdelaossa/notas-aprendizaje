/* eslint-disable prettier/prettier */
import { IsMongoId, IsString } from "class-validator";
import { ObjectId } from "mongoose";


export class NotaDto {
    @IsString()
    "titulo": string;
    
    @IsMongoId()
    "usuario": ObjectId

}
