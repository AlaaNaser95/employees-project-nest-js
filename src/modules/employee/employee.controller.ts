import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dtos/request/create-employee.dto';
import { FilterEmployeeListDto } from './dtos/request/filter-employee-list.dto';
import { PaginationInterceptor } from '../../common/interceptors/pagination.interceptor';
import { UpdateEmployeeDto } from './dtos/request/update-employee.dto';
import { DeleteEmployeeDto } from './dtos/request/delete-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  listEmployees(@Query() filterEmployeeListDto: FilterEmployeeListDto) {
    return this.employeeService.listEmployees(filterEmployeeListDto);
  }

  @Put(':employeeId')
  updateEmployee(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @Get(':employeeId')
  getEmployee(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.employeeService.getEmployee(employeeId);
  }

  @Delete(':employeeId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteEmployee(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Query() deleteEmployeeDto: DeleteEmployeeDto,
  ) {
    return await this.employeeService.deleteEmployee(
      employeeId,
      deleteEmployeeDto,
    );
  }
}
