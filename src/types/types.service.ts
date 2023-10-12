import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { User } from '@prisma/client';
import { TypesRepository } from './types.repository';


@Injectable()
export class TypesService {
  constructor(private readonly repository: TypesRepository){}

  async create(createTypeDto: CreateTypeDto, user: User) {
    return await this.repository.create(createTypeDto, user)
  }

  findAll() {
    return `This action returns all types`;
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: CreateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
