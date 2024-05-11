import { ApiProperty } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReportDto {
  @ApiProperty({
    example: 'Toyota',
    description: 'The make of the car',
  })
  @IsString()
  make: string;

  @ApiProperty({
    example: 'Corolla',
    description: 'The model of the car',
  })
  @IsString()
  model: string;

  @ApiProperty({
    example: 2019,
    description: 'The year the car was made',
  })
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @ApiProperty({
    example: 10000,
    description: 'The mileage of the car',
  })
  @IsNumber()
  @Min(0)
  @Max(100000000)
  mileage: number;

  @ApiProperty({
    example: 10000,
    description: "the longitude of the car's location",
  })
  @IsLongitude()
  lng: number;

  @ApiProperty({
    example: 10000,
    description: "the latitude of the car's location",
  })
  @IsLatitude()
  lat: number;

  @ApiProperty({
    example: 10000,
    description: 'The price of the car',
  })
  @IsNumber()
  @Min(0)
  @Max(100000000)
  price: number;
}
