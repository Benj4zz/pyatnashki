import { Injectable } from '@nestjs/common';
import { GameRepository } from './repository/game.repository';
import { Game } from './repository/game.schema';
import { CardService } from 'src/card/card.service';
import { Card } from 'src/card/repository/card.schema';
import { CreateGameDto } from './repository/game.dto';

@Injectable()
export class GameService {
    constructor(
        private gameRepository: GameRepository,
        private cardService: CardService
    ) {}

    async create(createGameDto: CreateGameDto): Promise<Game> {
        const { speed } = createGameDto || {};
        const unsortedCards = await this.prepareCards(8);
        let cards = this.shuffleCards(unsortedCards);
        cards = this.prepareImagesForPublic(cards);
        const gameDto = {
            speed: speed ? speed : 3,
            cards: cards,
        }

        return this.gameRepository.create(gameDto)
    }

    async prepareCards(length: number): Promise<Card[]> {
        const cards = await this.cardService.findAll();
        const cardsArray = [];
        while (cardsArray.length < length) {
            const index = Math.floor(Math.random() * cards.length);
            if (!cardsArray.includes(cards[index])) {
                cardsArray.push(cards[index], cards[index]);
            }
        }
        return cardsArray;
    }
    
    shuffleCards(cards: Card[]): Card[] {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        return cards;
    }

    prepareImagesForPublic(cards: Card[]) {
        return cards.map(card => ({...card, image: `${process.env.BASE_URL}/${card.image}`}));
    }

    async findAll(): Promise<Game[]> {
        return await this.gameRepository.findAll();
    }
}
