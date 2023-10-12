import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../prisma/prisma.service';
import { TypesRepository } from './types.repository';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [TypesController],
  providers: [TypesService, TypesRepository, PrismaService],
  exports: [TypesService]
})
export class TypesModule {}
