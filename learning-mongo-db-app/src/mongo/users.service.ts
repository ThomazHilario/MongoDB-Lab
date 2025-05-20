import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/user.schema';
import { Model } from 'mongoose';
import { LoginUserDTO, UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<Users>){}

    async createuser(data:UsersDTO){
        try {
            const create = await this.usersModel.create(data)

            return create.save()
        } catch (error) {
            console.log(error)
        }
    }

    async loginUser(data: LoginUserDTO){
        try {
            const user = await this.usersModel.findOne(data)

            return user
        } catch (error) {
            console.log(error)
        }
    }
}
