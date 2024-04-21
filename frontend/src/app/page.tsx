"use client";
import { Dropdown } from "@/components/dropdown/dropdown.component";
import { Input } from "@/components/input/input.component";
import { SearchResultsGrid } from "@/components/search-results-grid/search-results-grid.component";

export default function Home() {
  return (
    <>
      <Input label="Search" placeholder="Search..." />
      <Dropdown
        dropdownPlaceholder="Sort by"
        items={[{ name: "Stars", value: "start" }]}
        onSelect={(v) => {
          return;
        }}
      />
      {/* <Dropdown /> */}
      {/* <Dropdown /> */}
      <SearchResultsGrid
        items={[
          {
            id: 1,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 2,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 3,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 4,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 5,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 6,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 7,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 8,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
          {
            id: 9,
            description: "test",
            repoName: "test",
            forks: 0,
            stars: 0,
            repoFullPath: "qwe",
            url: "google.com",
          },
        ]}
      />
    </>
  );
}
