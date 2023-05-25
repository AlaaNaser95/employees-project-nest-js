import { Employee } from '../../../../database/entities/employee.entity';
import { EmployeeListDto } from './employee-list.dto';

export class EmployeeDto extends EmployeeListDto {
  readonly firstName: string;

  readonly lastName: string;

  readonly phoneCode: string;

  readonly phoneNumber: string;

  readonly dob: Date;

  readonly absenceDaysCount: number;
  readonly address: string;
  readonly createdAt: Date;

  constructor(employee: Employee) {
    super(employee);
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.phoneCode = employee.phoneCode;
    this.phoneNumber = employee.phoneNumber;
    this.dob = employee.dob;
    this.absenceDaysCount = employee.absenceDaysCount;
    this.address = employee.address;
    this.createdAt = employee.createdAt;
  }
}
