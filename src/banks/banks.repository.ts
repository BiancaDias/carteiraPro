import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BanksRepository {
  constructor(private readonly prisma: PrismaService){}

  async create(createBankDto: CreateBankDto, user: User) {
    return await this.prisma.bank.create({
      data: {
        ...createBankDto,
        userId: user.id
      }
    })
  }

  findAll() {
    return `This action returns all types`;
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: CreateBankDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
