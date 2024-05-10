import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the report',
  })
  @Expose()
  id: number;

  @ApiProperty({
    example: 10000,
    description: 'The price of the car',
  })
  @Expose()
  price: number;

  @ApiProperty({
    example: 2019,
    description: 'The year the car was made',
  })
  @Expose()
  year: number;

  @ApiProperty({
    example: 10000,
    description: "the longitude of the car's location",
  })
  @Expose()
  lng: number;

  @ApiProperty({
    example: 10000,
    description: "the latitude of the car's location",
  })
  @Expose()
  lat: number;

  @ApiProperty({
    example: 'Toyota',
    description: 'The make of the car',
  })
  @Expose()
  make: string;

  @ApiProperty({
    example: 'Corolla',
    description: 'The model of the car',
  })
  @Expose()
  model: string;

  @ApiProperty({
    example: 10000,
    description: 'The mileage of the car',
  })
  @Expose()
  mileage: number;

  @ApiProperty({
    example: true,
    description: 'Whether the report has been approved',
  })
  @Expose()
  approved: boolean;

  @ApiProperty({
    example: 1,
    description: 'The id of the user who created the report',
  })
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
