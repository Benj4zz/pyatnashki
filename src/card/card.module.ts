import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './repository/card.schema';
import { CardRepository } from './repository/card.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Card.name, schema: CardSchema}])],
  controllers: [CardController],
  providers: [CardService, CardRepository],
  exports: [CardService],
})
export class CardModule {}
