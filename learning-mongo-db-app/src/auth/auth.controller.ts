import { Body, Controller, Post, Get, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO, UsersDTO } from 'src/mongo/dto/users.dto';
import { Response, Request } from 'express';
import { AuthGuard } from './guards/auth.guard';
import { TokenExpiredError } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() data: UsersDTO, @Res() res: Response){
    const result = await this.authService.createUser(data)
    
    if(result.token){
      res.cookie('token', result.token)

      return res.send(result)
    }

    return result
  }
  
  @Post('login')
  async loginUser(@Body() data: LoginUserDTO, @Res() res: Response){
    try {

      const result = await this.authService.loginUser(data)

      if(result.token){
        res.cookie('token', result.token)

        res.send(result)
      }

    } catch (error) {
      return error
    }
  }

  @UseGuards(AuthGuard)
  @Get('verifyauth')
  async onAuth(@Req() req: Request){
    try {
      const token = req.cookies['token']

      const user = this.authService.verifyToken(token)

      return user

    } catch (error) {
      if(error instanceof TokenExpiredError){
        return {
          error: "Token expired!"
        }
      }
    }
  }

}
