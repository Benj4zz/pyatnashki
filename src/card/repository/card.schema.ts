import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CardDocument = Card & Document;

@Schema()
export class Card {
    @Prop()
    type: string;

    @Prop()
    image: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);