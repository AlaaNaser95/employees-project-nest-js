import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeRepository extends Repository<Employee> {
  constructor(private dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
  async findOneOrException(conditions, relations = [], customMessage?) {
    const entity = await this.findOne({
      where: conditions,
      relations: relations,
    });
    if (!entity) {
      throw new NotFoundException(customMessage ?? `Employee is not found`);
    }
    return entity;
  }
}
