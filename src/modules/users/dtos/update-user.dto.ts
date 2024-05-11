import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'johnny.cage@netherrealem.com',
    description: 'The email of the user',
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    example: 'ballbuster69',
    description: 'The password of the user',
  })
  @IsString()
  @IsOptional()
  password: string;
}
