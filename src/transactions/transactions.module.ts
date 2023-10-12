import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../prisma/prisma.service';
import { TransactionsRepository } from './transactions.repository';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsRepository, PrismaService],
  exports: [TransactionsService]
})
export class TransactionsModule {}
