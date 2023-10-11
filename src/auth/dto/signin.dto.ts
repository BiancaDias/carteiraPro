import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"
// import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {

  @IsEmail()
  @IsNotEmpty()
  // @ApiProperty({ example: "myemail@gmail.com", description: "Send a email for create a account in this aplication" })
  email: string

  @IsNotEmpty()
  // @ApiProperty({ example: "s3nhaSegura!", description: "Password use in this aplication" })
  @IsString()
  password: string
}
