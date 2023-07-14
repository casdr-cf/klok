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
      d={path}
      strokeWidth={0.1}
      className="stroke fill-white stroke-black"
      onClick={() => {
        router.push(`/${year}/${index + 1}`);
      }}
    />
  );
}
