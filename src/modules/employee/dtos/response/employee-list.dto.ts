import { PositionsEnum } from '../../../../common/enums/positions.enum';
import { Employee } from '../../../../database/entities/employee.entity';

export class EmployeeListDto {
  readonly id: number;
  readonly fullName: string;
  readonly phone: string;
  readonly joiningDate: Date;
  readonly position: PositionsEnum;

  constructor(employee: Employee) {
    this.id = employee.id;
    this.fullName = employee.getFullName();
    this.phone = employee.getPhone();
    this.joiningDate = employee.joiningDate;
    this.position = employee.position;
  }
}
