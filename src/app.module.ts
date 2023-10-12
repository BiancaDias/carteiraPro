import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, TransactionsModule, TypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
