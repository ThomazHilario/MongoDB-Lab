import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/mongo/users.service';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config'
import { LoginUserDTO, UsersDTO } from 'src/mongo/dto/users.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async createUser(data: UsersDTO){
        try {
            // Create user
            const user = await this.usersService.createuser(data)

            // Verify exist user
            if(user){
                // Generate token
                const token = this.jwtService.sign({
                    username: user.username,
                    email: user.email
                })

                // Return token
                return {
                    token,
                    data:{
                        username: user.username,
                        email: user.email
                    }
                }
            }
            
            throw new Error('Não foi possível criar o usuário')
        } catch (error) {
            // Return erro case not exist user
            return {
                MessageError: error
            }
        }
    }

    async loginUser(data: LoginUserDTO){
        try {
            const user = await this.usersService.loginUser(data)

            if(user){
                const token = this.jwtService.sign({ 
                    username: user.username,
                    email: user.email
                 })

                return {
                    token,
                    data:{
                        username: user.username,
                        email: user.email
                    }
                }
            }

            throw new Error('User not found!')

        } catch (error) {
            return {
                messageError: error
            }
        }
    }

    verifyToken(token:string){
        try {
            if(this.jwtService.verify(token)){
                return true
            }
            return false
        } catch (error) {
            return error
        }
    }
}