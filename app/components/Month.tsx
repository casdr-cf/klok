"use client";

import { useParams, useRouter } from "next/navigation";

interface Props {
  path: string;
  index: number;
}

export default function Month({ path, index }: Props) {
  const router = useRouter();

  const { year } = useParams();

  return (
    <path
      data-month-id={index + 1}
      d={path}
      className="stroke cursor-pointer fill-white stroke-black"
      onClick={() => {
        router.push(`/${year}/${index + 1}`);
      }}
    />
  );
}
