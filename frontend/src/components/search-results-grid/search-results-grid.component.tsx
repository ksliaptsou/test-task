import { FC } from "react";
import { SearchResultGridProps } from "./search-results-grid.types";
import { SearchResultItem } from "../search-result-item/search-results-item.component";

export const SearchResultsGrid: FC<SearchResultGridProps> = ({ items }) => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Results of search
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((v) => (
            <SearchResultItem key={v.id} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
};
