"use client";

import { IMonth } from "@/app/types";

interface Props extends Pick<IMonth, "path"> {
  index: number;
}

export default function Month({ path, index }: Props) {
  return (
    <path
      d={path}
      strokeWidth={0.1}
      className="stroke fill-white stroke-black"
      onClick={() => {
        console.log(index);
      }}
    />
  );
}
