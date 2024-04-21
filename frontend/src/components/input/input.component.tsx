"use client";

import { ChangeEventHandler, FC, useState } from "react";
import { InputProps } from "./input.types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  queryKey,
  ...props
}) => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>(
    () => searchParams.get(queryKey) || ""
  );
  const router = useRouter();
  const pathname = usePathname();

  const updateSearchQuery = (updatedQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (updatedQuery) {
      params.set(queryKey, updatedQuery);
    } else {
      params.delete(queryKey);
    }
    const queryString = params.toString();

    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(updatedPath);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(props.type === 'number' && (e.target.value > props.max! || e.target.value < props.min!)){
        return;
    }
    setValue(e.target.value);

    updateSearchQuery(e.target.value);
  };

  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
