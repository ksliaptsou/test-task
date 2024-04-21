import { RepoClient } from "@/services/repo.service";
import { SearchResultResponse } from "@/types/repo.types";

export interface HomeProps {
  data: SearchResultResponse;
}
