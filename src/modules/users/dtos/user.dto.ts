import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserDto {
  @ApiProperty({
    example: 1,
    required: true,
  })
  @Expose()
  id: number;

  @ApiProperty({
    example: 'john.wayne@gmail.com',
    required: true,
  })
  @Expose()
  email: string;
}
