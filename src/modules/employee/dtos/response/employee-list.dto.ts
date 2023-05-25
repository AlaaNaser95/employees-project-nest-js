import { PositionsEnum } from '../../../../common/enums/positions.enum';
import { Employee } from '../../../../database/entities/employee.entity';
import { GenderEnum } from '../../../../common/enums/gender.enum';

export class EmployeeListDto {
  readonly id: number;
  readonly fullName: string;
  readonly gender: GenderEnum;
  readonly phone: string;
  readonly email: string;
  readonly joiningDate: Date;
  readonly position: PositionsEnum;

  constructor(employee: Employee) {
    this.id = employee.id;
    this.fullName = employee.getFullName();
    this.gender = employee.gender;
    this.phone = employee.getPhone();
    this.email = employee.email;
    this.joiningDate = employee.joiningDate;
    this.position = employee.position;
  }
}
