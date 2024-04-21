import { FC } from "react";
import { SearchResultItemProps } from "./search-results-item.types";
import Link from "next/link";

export const SearchResultItem: FC<SearchResultItemProps> = ({
  repoName,
  repoFullPath,
  url,
  description,
  forks,
  stars,
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
        <span className="text-gray-900 font-bold text-lg">$29.99</span>
        <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
