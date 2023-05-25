import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../../database/repositories/employee.repository';
import { EmployeeDto } from './dtos/response/employee.dto';
import { PaginationResponseDto } from '../../common/dtos/pagination-response.dto';
import { EmployeeListDto } from './dtos/response/employee-list.dto';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}
  async createEmployee(createEmployeedDto) {
    const employee = await this.employeeRepository.save(
      this.employeeRepository.create(createEmployeedDto),
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { data: new EmployeeDto(employee) };
  }

  async listEmployees(filterEmployeeListDto) {
    const { page, limit, sort, name } = filterEmployeeListDto;
    const query = this.employeeRepository.createQueryBuilder('employee');
    if (name)
      query.andWhere(
        `CONCAT(
                employee.firstName,
                ' ' ,
                employee.lastName
              ) LIKE :name`,
        { name: `%${name}%` },
      );
    const [employees, count] = await query
      .take(limit)
      .skip(limit * (page - 1))
      .orderBy('employee.id', sort)
      .getManyAndCount();
    return new PaginationResponseDto(
      employees.map((employee) => {
        return new EmployeeListDto(employee);
      }),
      count,
    );
  }
}
