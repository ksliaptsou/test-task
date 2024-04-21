export interface SearchResultItemProps {
  id: number;
  repoName: string;
  repoFullPath: string;
  description?: string;
  forks: number;
  url: string;
  stars: number;
}
