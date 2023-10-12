import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from '@prisma/client';
import { TransactionsRepository } from './transactions.repository';
import * as dayjs from 'dayjs';

@Injectable()
export class TransactionsService {
  constructor(private readonly repository: TransactionsRepository) {}
  
  async create(createTransactionDto: CreateTransactionDto, user: User) {
    const date = dayjs().format('DD/MM')
    return await this.repository.create(createTransactionDto, user, date);
  }

  async findAll(user: User) {
    return await this.repository.findAll(user);
  }

  async update(id: number, updateTransactionDto: CreateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
