import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { User } from '@prisma/client';
import { BanksRepository } from './banks.repository';


@Injectable()
export class BanksService {
  constructor(private readonly repository: BanksRepository){}
  
  async create(createBankDto: CreateBankDto, user: User) {
    return await this.repository.create(createBankDto, user);
  }

  findAll() {
    return `This action returns all banks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: CreateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}
