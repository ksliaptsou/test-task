import { FC } from "react";
import Link from "next/link";
import { SearchResultResponseItem } from "@/types/repo.types";
import { StarButton } from "../star-button/star-button.component";

export const SearchResultItem: FC<SearchResultResponseItem> = ({
  repoName,
  repoFullPath,
  url,
  description,
  forks,
  stars,
  isStarred,
  id,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <Link href={url} className="text-gray-500 text-sm mt-2 hover:underline">
        {repoFullPath}
      </Link>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{repoName}</h3>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <p className="text-gray-500 text-sm mt-2">Forks: {forks || 0}</p>
      <p className="text-gray-500 text-sm mt-2">Stars: {stars || 0}</p>
      <div className="flex items-center justify-between mt-4">
        <StarButton
          isStarred={isStarred}
          id={id}
       />
      </div>
    </div>
  );
};
