import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { User } from '@prisma/client';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly repository: TransactionsRepository) {}
  
  create(createTransactionDto: CreateTransactionDto, user: User) {
    return 'This action adds a new transaction';
  }

  findAll(user: User) {
    return `This action returns all transactions`;
  }

  update(id: number, updateTransactionDto: CreateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
