import { PaginationRequestDto } from '../../../../common/dtos/pagination-request.dto';
import { IsOptional, IsString } from 'class-validator';

export class FilterEmployeeListDto extends PaginationRequestDto {
  @IsOptional()
  @IsString()
  name?: string;
}
