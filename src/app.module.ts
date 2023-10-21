import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './nota/nota.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://katy:noviembre@ac-rhskvkc-shard-00-00.x5aeepm.mongodb.net:27017,ac-rhskvkc-shard-00-01.x5aeepm.mongodb.net:27017,ac-rhskvkc-shard-00-02.x5aeepm.mongodb.net:27017/MiBasedeDatos?replicaSet=atlas-qpz2r5-shard-0&ssl=true&authSource=admin',
    ),
    NotaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
