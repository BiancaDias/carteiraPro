import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"
// import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  username: string

  @IsEmail()
  @IsNotEmpty()
  // @ApiProperty({ example: "myemail@gmail.com", description: "Send a email for create a account in this aplication" })
  email: string

  @IsNotEmpty()
  // @ApiProperty({ example: "s3nhaSegura!", description: "Password use in this aplication" })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1
  })
  password: string
}
