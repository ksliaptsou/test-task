import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchResultResponseDto } from './dto/search-result.dto';
import { SearchQueryDto } from './dto/search-query.dto';
import { RepoService } from './repo.service';
import { SetStarQueryDto } from './dto/set-start.dto';

@Controller('repo')
@ApiTags('repo-service')
@ApiBearerAuth()
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get('search')
  @ApiResponse({ type: [SearchResultResponseDto] })
  async seachRepo(@Query() queryParams: SearchQueryDto) {
    return await this.repoService.search(queryParams);
  }

  @Post('/star')
  @ApiResponse({})
  async setStar(@Query() query: SetStarQueryDto) {
    return await this.repoService.setStar(query.id);
  }
}
