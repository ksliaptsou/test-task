import { SearchQueryDto } from 'src/repo/dto/search-query.dto';

export const mapParamsToQuery = (params: SearchQueryDto) => {
  const { query, sort, page, pageSize, order } = params;
  return `q=${query}&sort=${sort}&order=${order}&page=${page}&per_page=${pageSize}`;
};
