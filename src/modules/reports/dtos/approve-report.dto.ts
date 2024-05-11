import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ApproveReportDto {
  @ApiProperty({
    example: true,
    description: 'Whether the report is approved',
  })
  @IsBoolean()
  approved: boolean;
}
