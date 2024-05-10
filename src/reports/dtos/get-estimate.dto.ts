import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetEstimateDto {
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
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @ApiProperty({
    example: 10000,
    description: 'The mileage of the car',
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(100000000)
  mileage: number;

  @ApiProperty({
    example: 10000,
    description: "the longitude of the car's location",
  })
  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @ApiProperty({
    example: 10000,
    description: "the latitude of the car's location",
  })
  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;
}
