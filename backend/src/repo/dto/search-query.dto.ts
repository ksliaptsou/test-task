import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export type SortQuery = 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
export const SortQueries: SortQuery[] = [
  'stars',
  'forks',
  'help-wanted-issues',
  'updated',
];

export type OrderQuery = 'desc' | 'asc';
export const OrderQueries: OrderQuery[] = ['desc', 'asc'];

export class SearchQueryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  query: string;

  @IsOptional({ always: true })
  @IsString()
  @IsEnum(SortQueries)
  @ApiProperty({ required: false })
  sort?: SortQuery;

  @IsOptional({ always: true })
  @IsString()
  @IsEnum(OrderQueries)
  @ApiProperty({ required: false })
  order?: OrderQuery;

  @IsOptional({ always: true })
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Max(100)
  @Min(1)
  @ApiProperty({ required: false })
  pageSize?: number;

  @IsOptional({ always: true })
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(1)
  @ApiProperty({ required: false })
  page?: number;
}
