"use client";

import Month from "@/app/components/Month";
import { MonthsMap } from "./utils";
import { useParams } from "next/navigation";

function getViewBox(year: string, month?: string) {
  const standardViewBox = "0 0 100 100";

  if (!month) return standardViewBox;
}

interface Props {
  months: MonthsMap;
}

export default function YearCircle({ months }: Props) {
  const { year, month } = useParams();

  const viewBox = getViewBox(year, month);

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto aspect-square h-screen"
    >
      <g transform="translate(50, 50)">
        {[...months.entries()].map(([index, month]) => (
          <Month key={index} path={month.path} index={index} />
        ))}
      </g>
    </svg>
  );
}
