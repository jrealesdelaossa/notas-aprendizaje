import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './nota/nota.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://usuario:usuario@ac-mcwnesx-shard-00-00.0qgseg1.mongodb.net:27017,ac-mcwnesx-shard-00-01.0qgseg1.mongodb.net:27017,ac-mcwnesx-shard-00-02.0qgseg1.mongodb.net:27017/miBaseDeDatos?replicaSet=atlas-9opzdm-shard-0&ssl=true&authSource=admin',
    ),
    NotaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
