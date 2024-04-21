import { Home } from "@/components/home/home.component";
import { axiosInstance } from "@/config/axios.config";
import { buildEnvVars } from "@/constants/envVariables";
import { HttpClient } from "@/services/http-controller.service";
import { RepoClient } from "@/services/repo.service";
import { HomePageProps } from "@/types/page.types";
import { SearchResultResponse } from "@/types/repo.types";
import { use } from "react";

export default function Main({ searchParams }: HomePageProps) {
  const httpClient = new HttpClient(
    axiosInstance,
    process.env.API_URL!,
    5000,
    process.env.API_TOKEN!
  );
  const repoClient = new RepoClient(httpClient);
  const items: SearchResultResponse = searchParams.query
    ? use(
        repoClient.searchRepos({
          ...searchParams,
          query: searchParams.query || "",
        })
      )
    : { items: [], page: 1, pageSize: 30, totalPages: 0, count: 0 };
  return <Home data={items} />;
}
