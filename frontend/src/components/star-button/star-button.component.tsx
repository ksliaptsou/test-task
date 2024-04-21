"use client";
import { FC, useState } from "react";
import { StarButtonProps } from "./star-button.types";
import { axiosInstance } from "@/config/axios.config";
import { HttpClient } from "@/services/http-controller.service";
import { RepoClient } from "@/services/repo.service";

export const StarButton: FC<StarButtonProps> = ({
  id,
  isStarred,
}) => {
  const [repoStarred, setRepoStarred] = useState(isStarred);
  const httpClient = new HttpClient(axiosInstance, process.env.API_URL!, 5000, process.env.API_TOKEN);
  const repoClient = new RepoClient(httpClient);
  const handleClick = async () => {
    await repoClient.setStar({ id });
    setRepoStarred((prev) => !prev);
  };

  return (
    <button
      className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
      onClick={handleClick}
    >
      {repoStarred ? "Starred" : "Not starred"}
    </button>
  );
};
