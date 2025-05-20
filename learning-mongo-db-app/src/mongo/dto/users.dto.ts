import { IsNotEmpty, IsString } from "class-validator";

export class UsersDTO{
    @IsString()
    username: string

    @IsString()
    email: string

    @IsString()
    password: string
}

export class LoginUserDTO{
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}