import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDTO, UsersDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async loginUser(@Body() data: LoginUserDTO){
    return await this.usersService.loginUser(data)
  }

  @Post('register')
  async createUser(@Body() data: UsersDTO){
    return await this.usersService.createuser(data)
  }
}
