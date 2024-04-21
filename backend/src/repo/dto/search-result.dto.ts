import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SearchResultDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  repoName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  repoFullPath: string;

  @IsOptional({ always: true })
  @IsString()
  @ApiProperty({ required: false })
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  forks: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  url: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  stars: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  isStarred: boolean;
}

export class SearchResultResponseDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  count: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  pageSize: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  page: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  totalPages: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SearchResultDto)
  @ApiProperty({ type: SearchResultDto, isArray: true })
  items: SearchResultDto[];
}
