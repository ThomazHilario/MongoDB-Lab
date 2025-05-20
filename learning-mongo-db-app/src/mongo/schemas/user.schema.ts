import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>

@Schema({ collection: "usersAPI" })
export class Users {
    @Prop({ required: true })
    username: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    password: string
}

export const UsersSchema = SchemaFactory.createForClass(Users)