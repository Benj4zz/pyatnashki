import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { GameRepository } from './repository/game.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from './repository/game.schema';
import { CardModule } from 'src/card/card.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Game.name, schema: GameSchema}]),
    CardModule
  ],
  controllers: [GameController],
  providers: [GameService, GameRepository],
})
export class GameModule {}
