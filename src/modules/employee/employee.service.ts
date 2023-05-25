import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../../database/repositories/employee.repository';
import { EmployeeDto } from './dtos/response/employee.dto';

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
}
