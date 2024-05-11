import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '@common/decorators/current-user.decorator';
import { AdminGuard } from '@common/guards/admin.guard';
import { AuthGuard } from '@common/guards/auth.guard';
import { Serialize } from '@common/interceptors/serialize.interceptor';
import { ApproveReportDto } from '@modules/reports/dtos/approve-report.dto';
import { CreateReportDto } from '@modules/reports/dtos/create-report.dto';
import { GetEstimateDto } from '@modules/reports/dtos/get-estimate.dto';
import { ReportDto } from '@modules/reports/dtos/report.dto';
import { ReportsService } from '@modules/reports/reports.service';
import { User } from '@modules/users/user.entity';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto) // Serialize the response according to the ReportDto
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @Get()
  // @UseGuards(AdminGuard)
  // @Serialize(GetEstimateDto)
  async getEstimate(@Query() query: GetEstimateDto) {
    const estimate = await this.reportsService.createEstimate(query);
    return estimate;
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return this.reportsService.changeApproval(id, body.approved);
  }
}
