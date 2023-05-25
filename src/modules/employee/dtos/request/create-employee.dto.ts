import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { PositionsEnum } from '../../../../enums/positions.enum';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  phoneCode: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  dob: Date;

  @IsString()
  @IsOptional()
  joiningDate: Date;

  @IsEnum(PositionsEnum)
  @IsNotEmpty()
  position: PositionsEnum;

  @IsInt()
  @Min(0)
  @IsOptional()
  absenceDaysCount: number;

  @IsOptional()
  @IsString()
  address: string;
}
