import { SearchRepoRequestQuery } from "@/types/repo.types";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  queryKey: keyof SearchRepoRequestQuery;
}
