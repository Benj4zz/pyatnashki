import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './repository/card.dto';
import { Card } from './repository/card.schema';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto)
  }

  @Get()
  async findAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @Get(':type')
  async find(@Param('type') type: string): Promise<Card> {
    const document = await this.cardService.findOne(type);

    if (!document) {
      throw new NotFoundException(`Карточка с таким типом (${type}) не найдена`);
    }

    return document;
  }
}
