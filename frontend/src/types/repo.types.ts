import { RepoClient } from "@/services/repo.service";

export type OrderQuery = "desc" | "asc";
export type SortQuery = "stars" | "forks" | "help-wanted-issues" | "updated";

export interface SearchRepoRequestQuery {
  query: string;
  sort?: SortQuery;
  order?: OrderQuery;
  pageSize?: number;
  page?: number;
}

export interface SetStartRequestQuery {
  id: number;
}

export interface SearchResultResponseItem {
  id: number;
  repoName: string;
  repoFullPath: string;
  description?: string;
  forks: number;
  url: string;
  stars: number;
  isStarred: boolean;
}

export interface SearchResultResponse {
  count: number;
  pageSize: number;
  page: number;
  totalPages: number;
  items: SearchResultResponseItem[];
}
