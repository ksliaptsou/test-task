import { SearchRepoRequestQuery } from "./repo.types";

export interface DefaultPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface HomePageProps {
  searchParams: SearchRepoRequestQuery;
}
