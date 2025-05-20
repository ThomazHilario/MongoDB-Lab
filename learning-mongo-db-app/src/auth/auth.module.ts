import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'
import { UsersService } from 'src/mongo/users.service';
import { UsersModule } from 'src/mongo/users.module';

@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret: String(process.env.SECRET_KEY),
      signOptions: { expiresIn: '15min' }
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
