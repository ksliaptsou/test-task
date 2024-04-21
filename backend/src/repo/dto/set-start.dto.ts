import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SetStarQueryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id: string;
}
