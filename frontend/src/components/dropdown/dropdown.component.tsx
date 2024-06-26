"use client";

import { ChevronSVG } from "@/assets";
import { DropdownProps } from "./dropdown.types";
import { FC, ReactEventHandler, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Dropdown: FC<DropdownProps> = ({
  dropdownPlaceholder,
  items,
  queryKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>(
    () => searchParams.get(queryKey) || ""
  );
  const router = useRouter();
  const pathname = usePathname();

  const handleDropdownClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleSelect: ReactEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
    const params = new URLSearchParams(searchParams);
    params.set(queryKey, e.currentTarget.value);
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };
  
  return (
    <div className="w-fit">
      <button
        id="dropdownRadioButton"
        className="justify-between text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={handleDropdownClick}
      >
        {dropdownPlaceholder}
        <ChevronSVG className="w-2.5 h-2.5 ms-3" />
      </button>

      {isOpen && (
        <div className="z-10 w-48 divide-y rounded-lg shadow bg-gray-700 divide-gray-600">
          <ul
            className="p-3 space-y-3 text-sm text-gray-200"
            aria-labelledby="dropdownRadioButton"
          >
            {items.map((v) => (
              <li key={v.value}>
                <div className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value={v.value}
                    checked={v.value === value}
                    onClick={handleSelect}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700  bg-gray-600 border-gray-500"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-300">
                    {v.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
