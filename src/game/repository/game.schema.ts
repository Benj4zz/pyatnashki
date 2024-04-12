import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Card } from "src/card/repository/card.schema";

export type GameDocument = Game & Document;

@Schema()
export class Game {
    @Prop()
    level: number;

    @Prop()
    speed: number;

    @Prop({ type: [{type: Types.ObjectId, ref: 'Card'}] })
    cards: Card
}

export const GameSchema = SchemaFactory.createForClass(Game);