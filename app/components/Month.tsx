"use client";

import { IMonth } from "@/app/types";
import { useParams, useRouter } from "next/navigation";

interface Props extends Pick<IMonth, "path"> {
  index: number;
}

export default function Month({ path, index }: Props) {
  const router = useRouter();

  const { year } = useParams();

  return (
    <path
      data-month-id={index + 1}
      d={path}
      className="fill-red-300"
      onClick={() => {
        router.push(`/${year}/${index + 1}`);
      }}
    />
  );
}
