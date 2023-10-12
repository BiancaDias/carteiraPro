import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService){}

  async create(createTransactionDto: CreateTransactionDto, user: User, date: string) {
    return await this.prisma.transaction.create({
      data: {
        ...createTransactionDto,
        userId: user.id,
        date
      }
    })
  }

  async findAll(user: User) {
    return await this.prisma.transaction.findMany({
      where: {userId: user.id}
    })
  }

  async update(id: number, updateTransactionDto: CreateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
