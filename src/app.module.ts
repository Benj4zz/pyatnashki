import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { CardModule } from './card/card.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.DATABASE_URL);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets/',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GameModule,
    CardModule
  ],
})
export class AppModule {}
