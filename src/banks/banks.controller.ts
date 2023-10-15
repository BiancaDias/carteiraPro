import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { AuthGuard } from '../guards/auth.guard';
import { Users } from '../decorators/user.decorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard)
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  async create(@Body() createBankDto: CreateBankDto, @Users() user: User) {
    return await this.banksService.create(createBankDto, user);
  }

  @Get()
  findAll(@Users() user: User) {
    return this.banksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankDto: CreateBankDto) {
    return this.banksService.update(+id, updateBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banksService.remove(+id);
  }
}
