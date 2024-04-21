import { SearchRepoRequestQuery } from "@/types/repo.types";

export interface DropdownItems {
  name: string;
  value: string;
}
export interface DropdownProps {
  dropdownPlaceholder: string;
  items: DropdownItems[];
  queryKey: string;
}
