import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class TypesRepository {
  constructor(private readonly prisma: PrismaService){}

  async create(createTypeDto: CreateTypeDto, user: User) {
    return await this.prisma.type.create({
      data: {
        ...createTypeDto,
        userId: user.id
      }
    })
  }

  async findAll(user: User) {
    return await this.prisma.type.findMany({
      where: {
        userId: user.id
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: CreateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
