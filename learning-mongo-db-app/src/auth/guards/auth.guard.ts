import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import 'dotenv/config'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.switchToHttp().getRequest().headers['authorization'].split(' ')[1]

    if(token){
      return true
    }

    return false
  }
}