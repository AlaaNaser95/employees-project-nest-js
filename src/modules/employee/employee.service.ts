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
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: new EmployeeDto(employee),
      message: 'Employee has been created successfully',
    };
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

  async updateEmployee(employeeId, updateEmployeeDto) {
    await this.employeeRepository.findOneOrException({
      id: employeeId,
    });
    await this.employeeRepository.update(employeeId, updateEmployeeDto);
    const employee = await this.employeeRepository.findOneOrException({
      id: employeeId,
    });
    return {
      data: new EmployeeDto(employee),
      message: 'Employee has been updated successfully',
    };
  }

  async getEmployee(employeeId) {
    const employee = await this.employeeRepository.findOneOrException({
      id: employeeId,
    });
    return {
      data: new EmployeeDto(employee),
      message: 'Employee has been returned successfully',
    };
  }
}
