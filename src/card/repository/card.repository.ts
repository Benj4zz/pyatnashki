import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from './card.schema';
import { CreateCardDto } from './card.dto';

@Injectable()
export class CardRepository {
    constructor(@InjectModel(Card.name) private cardModule: Model<CardDocument>) {}

    async create(createCardDto: CreateCardDto): Promise<Card> {
        const newCard = new this.cardModule(createCardDto);
        return newCard.save();
    }

    async findAll(): Promise<Card[]> {
        return await this.cardModule.find().exec();
    }

    async findOne(type: string): Promise<Card | null> {
        return await this.cardModule.findOne({ type: type }).exec();
    }
}
