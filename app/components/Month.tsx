"use client";

import { IMonth } from "@/app/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props extends Pick<IMonth, "path"> {
  index: number;
}

export default function Month({ path, index }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const yearPath = pathname.split("/")[1];

  return (
    <path
      d={path}
      strokeWidth={0.1}
      className="stroke fill-white stroke-black"
      onClick={() => {
        router.push(`/${yearPath}/${index + 1}`);
      }}
    />
  );
}
