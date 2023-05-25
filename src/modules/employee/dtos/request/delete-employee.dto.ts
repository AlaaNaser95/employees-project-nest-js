import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class DeleteEmployeeDto {
  @Transform((value) => {
    return value.value == 'true';
  })
  @IsBoolean()
  @IsNotEmpty()
  softDelete: boolean = true;
}
