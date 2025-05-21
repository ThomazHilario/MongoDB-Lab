import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/mongo/users.module';
import 'dotenv/config'

@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret: String(process.env.SECRET_KEY),
      signOptions: { expiresIn: '1min' }
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
