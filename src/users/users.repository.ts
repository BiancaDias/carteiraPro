import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) { }
  
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto})
  }
  
  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: {email}})
  }
  
  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {id}
    })
  }
}