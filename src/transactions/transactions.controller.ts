import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { AuthGuard } from '../guards/auth.guard';
import { Users } from '../decorators/user.decorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto, @Users() user: User) {
    return await this.transactionsService.create(createTransactionDto, user);
  }

  @Get()
  async findAll(@Users() user: User) {
    return await this.transactionsService.findAll(user);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTransactionDto: CreateTransactionDto) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
