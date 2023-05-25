import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dtos/request/create-employee.dto';
import { FilterEmployeeListDto } from './dtos/request/filter-employee-list.dto';
import { PaginationInterceptor } from '../../common/interceptors/pagination.interceptor';

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
}
