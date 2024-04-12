import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './game.schema';
import { CreateGameDto } from './game.dto';

@Injectable()
export class GameRepository {
    constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

    async create(createGameDto: CreateGameDto): Promise<Game> {
        const newGame = new this.gameModel(createGameDto);
        return newGame.save();
    }

    async findAll(): Promise<Game[]> {
        return this.gameModel.find().exec();
    }

    async findOne(id: string): Promise<Game | null> {
        return this.gameModel.findById(id).exec();
    }
}