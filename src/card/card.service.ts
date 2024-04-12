import { Injectable } from '@nestjs/common';
import { CardRepository } from './repository/card.repository';
import { CreateCardDto } from './repository/card.dto';
import { Card } from './repository/card.schema';

@Injectable()
export class CardService {
    constructor(private cardRepository: CardRepository) {}

    async create(card: CreateCardDto): Promise<Card> {
        return this.cardRepository.create(card);
    }

    async findAll(): Promise<Card[] | null> {
        return this.cardRepository.findAll();
    }

    async findOne(type: string): Promise<Card | null> {
        return this.cardRepository.findOne(type);
    }
}
