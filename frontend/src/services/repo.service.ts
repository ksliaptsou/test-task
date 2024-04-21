import {
  SearchRepoRequestQuery,
  SearchResultResponse,
  SetStartRequestQuery,
} from "@/types/repo.types";
import { HttpClient } from "./http-controller.service";

export class RepoClient {
  constructor(private httpClient: HttpClient) {}

  async searchRepos(query: SearchRepoRequestQuery, abortSignal?: AbortSignal) {
    return await this.httpClient.get<SearchResultResponse>("/repo/search", {
      queryParams: { ...query },
      abortSignal,
    });
  }

  async setStar(query: SetStartRequestQuery, abortSignal?: AbortSignal) {
    return await this.httpClient.post<undefined, void>(
      "/repo/star",
      undefined,
      {
        queryParams: { ...query },
        abortSignal,
      }
    );
  }
}
