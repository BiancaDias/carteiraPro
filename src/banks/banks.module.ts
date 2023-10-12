import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { BanksRepository } from './banks.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [BanksController],
  providers: [BanksService, BanksRepository, PrismaService],
  exports: [BanksService]
})
export class BanksModule {}
