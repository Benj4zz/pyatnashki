import { Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './repository/game.schema';
import { CreateGameDto } from './repository/game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  async create(createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }
}
