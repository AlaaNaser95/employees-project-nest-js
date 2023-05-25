import { Column, Entity } from 'typeorm';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Base } from './base';
import { PositionsEnum } from '../../common/enums/positions.enum';

@Entity()
export class Employee extends Base {
  @Column()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  phoneCode: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @Column('date', { nullable: true })
  @IsDate()
  @IsOptional()
  dob: Date;

  @Column('date', { nullable: true })
  @IsDate()
  @IsOptional()
  joiningDate: Date;

  @Column()
  @IsEnum(PositionsEnum)
  @IsNotEmpty()
  position: PositionsEnum;

  @Column('int', { default: 0 })
  @IsInt()
  @IsNotEmpty()
  absenceDaysCount: number;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  address: string;

  public getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  public getPhone() {
    return this.phoneCode + this.phoneNumber;
  }
}
