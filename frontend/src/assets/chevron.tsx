import { FC } from "react";
import { DefaultAssetProps } from "./assets.types";

export const ChevronSVG: FC<DefaultAssetProps> = ({className}) => <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className}  fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>