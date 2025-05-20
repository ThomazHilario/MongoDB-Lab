import { Body, Controller, Post, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO, UsersDTO } from 'src/mongo/dto/users.dto';
import { Response, Request } from 'express';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() data: UsersDTO, @Res() res: Response){

    
    const result = await this.authService.createUser(data)
    
    if(result.token){
      res.cookie('token', result.token)
      res.cookie('dataUser', result.data)

      return res.send({
        message: "User created!"
      })
    }

    return result
  }

  
  @Post('login')
  async loginUser(@Body() data: LoginUserDTO, @Res() res: Response, @Req() req: Request){

    const isValidToken = this.authService.verifyToken(req.cookies['token'])

    if(isValidToken){
      res.send({
        message: "Is Logged!"
      })
      
      return
    }

    const result = await this.authService.loginUser(data)

    if(result.token){
      res.cookie('token', result.token)
      res.cookie('dataUser', result.data)

      res.send({
        message: "Login user is success!"
      })
    }

    return result
  }

}
