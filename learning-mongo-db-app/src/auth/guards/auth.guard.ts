import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import 'dotenv/config'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const result = context.switchToHttp().getRequest().cookies['token']
    console.log(result)
    if(result){
        return true
    }

    return false
  }
}