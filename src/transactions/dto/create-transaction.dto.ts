import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTransactionDto {

  @IsInt()
  @IsNotEmpty()
  amount: number

  @IsString()
  @IsNotEmpty()
  description: string

  @IsInt()
  @IsNotEmpty()
  bankId: number

  @IsInt()
  @IsNotEmpty()
  typeId: number
}
