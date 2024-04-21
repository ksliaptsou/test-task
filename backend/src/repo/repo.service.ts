import { Injectable } from '@nestjs/common';
import { SearchQueryDto } from './dto/search-query.dto';
import { mapParamsToQuery } from 'src/utils/map-params-to-quert.util';

@Injectable()
export class RepoService {
  async search(queryParams: SearchQueryDto) {
    const githubQuery = mapParamsToQuery(queryParams);
  }
}
