import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import SignUpDto from './dto/signup.dto'
import { UsersService } from '../users/users.service';
import * as bcrypt from "bcrypt";
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService) { }

  async signUp(signUpDto: SignUpDto) { //cria conta
    return await this.usersService.create(signUpDto);
  }

  async signIn(signInDto: SignInDto) { //loga na conta
    const { email, password } = signInDto;
    const user = await this.usersService.getUserByEmail(email)

    if (!user) throw new UnauthorizedException(`Email or password not valid.`);

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException(`Email or password not valid.`);
    return this.createToken(user);
  }

  private async createToken(user: User) {
    const { id } = user;

    const token = this.jwtService.sign({ id })
    return { token, name: user.username }

  }

  checkToken(token: string) {
    const data = this.jwtService.verify(token)
    return data
  }

}