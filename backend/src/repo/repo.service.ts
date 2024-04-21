import { Inject, Injectable } from '@nestjs/common';
import { SearchQueryDto } from './dto/search-query.dto';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { SearchDriverResult } from 'src/common/interfaces/search-driver-response.interface';
import { SearchResultResponseDto } from './dto/search-result.dto';

@Injectable()
export class RepoService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async search(queryParams: SearchQueryDto) {
    try {
      const { query, sort, page, pageSize, order } = queryParams;
      const cacheExpireTime = this.configService.get('cacheExpireTime');
      const targetSearchDriver = this.configService.get('targetSearchDriver');
      const driverResponse = await firstValueFrom(
        this.httpService.get<SearchDriverResult>(
          `${targetSearchDriver}search/repositories`,
          {
            params: {
              q: query,
              sort,
              order,
              page,
              per_page: pageSize,
            },
          },
        ),
      );

      const mappedItems = await Promise.all(
        driverResponse.data.items.map(async (v) => {
          const isStarred = await this.cacheManager.get<boolean>(
            v.id.toString(),
          );
          if (!isStarred) {
            await this.cacheManager.set(
              v.id.toString(),
              false,
              cacheExpireTime,
            );
          }
          return {
            description: v.description,
            forks: v.forks,
            id: v.id,
            repoFullPath: v.full_name,
            repoName: v.name,
            stars: v.stargazers_count,
            url: v.url,
            isStarred: isStarred || false,
          };
        }),
      );
      const result: SearchResultResponseDto = {
        count: driverResponse.data.total_count,
        page: page || 1,
        totalPages: Math.ceil(
          driverResponse.data.total_count / (pageSize || 30),
        ),
        pageSize: pageSize || 30,
        items: mappedItems,
      };

      return result;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  }

  async setStar(id: string) {
    const cacheExpireTime = this.configService.get('cacheExpireTime');
    const previousStarValue = await this.cacheManager.get<boolean>(id);
    await this.cacheManager.set(id, !previousStarValue, cacheExpireTime);
    return;
  }
}
