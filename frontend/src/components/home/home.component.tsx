import { FC } from "react";
import { Dropdown } from "../dropdown/dropdown.component";
import { Input } from "../input/input.component";
import { SearchResultsGrid } from "../search-results-grid/search-results-grid.component";
import { HomeProps } from "./home.types";

export const Home: FC<HomeProps> = ({ data }) => {
  return (
    <>
      <Input
        queryKey="query"
        label="Search"
        placeholder="Search..."
        type="text"
      />
      <Dropdown
        dropdownPlaceholder="Sort by"
        queryKey="sort"
        items={[
          { name: "Stars", value: "start" },
          { name: "Forks", value: "forks" },
          { name: "Help wanted", value: "help-wanted-issues" },
          { value: "updated", name: "Updated" },
        ]}
      />
      <Dropdown
        dropdownPlaceholder="Order"
        queryKey="order"
        items={[
          { name: "Desc", value: "desc" },
          { name: "Asc", value: "asc" },
        ]}
      />
      <Input
        queryKey="pageSize"
        label="Page Size"
        type="number"
        max={99}
        min={2}
      /> 
      <Input
        queryKey="page"
        label={`Page (max ${data?.totalPages || 0})`}
        type="number"
        max={data?.totalPages || 1}
        min={1}
      />
      <SearchResultsGrid {...data} />
    </>
  );
};
