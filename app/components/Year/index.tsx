"use client";

import Month from "@/app/components/Month";
import { getMonthsOfYear } from "./utils";
import { useParams } from "next/navigation";
import { WindowSize, useWindowSize } from "@/app/hooks/useWindowSize";

function getViewBox(windowSize: WindowSize) {
  const { width, height } = windowSize;

  return `${-width / 2} ${-height / 2} ${width} ${height}`;
}

export default function Year() {
  const windowSize = useWindowSize();
  const { year } = useParams();
  const months = getMonthsOfYear(Number(year), windowSize);

  return (
    <svg
      viewBox={getViewBox(windowSize)}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-screen"
    >
      <g transform="translate(0, 0)">
        {[...months.entries()].map(([index, month]) => (
          <Month key={index} path={month.path} index={index} />
        ))}
      </g>
    </svg>
  );
}
