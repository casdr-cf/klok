"use client";

import Month from "@/app/components/Month";
import { getMonthsOfYear } from "./utils";
import { useParams, useRouter } from "next/navigation";
import { WindowSize, useWindowSize } from "@/app/hooks/useWindowSize";
import { useEffect, useState, MouseEvent } from "react";

function getViewBox(windowSize: WindowSize, month: number | null = null) {
  const { width, height } = windowSize;

  const yearViewBox = `${-width / 2} ${-height / 2} ${width} ${height}`;

  if (!month) return yearViewBox;

  const monthElement = document.querySelector(
    `[data-month-id="${month}"]`,
  ) as SVGPathElement | null;
  if (!monthElement) return yearViewBox;

  const {
    x,
    y,
    width: monthWidth,
    height: monthHeight,
  } = monthElement.getBBox();

  const PADDING = 20;

  return `${x - PADDING / 2} ${y - PADDING / 2} ${monthWidth + PADDING} ${
    monthHeight + PADDING
  }`;
}

function useViewBox(month: number | null = null) {
  const windowSize = useWindowSize();
  const [viewBox, setViewBox] = useState(getViewBox(windowSize, month));

  useEffect(() => {
    setViewBox(getViewBox(windowSize, month));
  }, [windowSize, month]);

  return viewBox;
}

export default function Year() {
  const router = useRouter();
  const { year, month } = useParams();

  const windowSize = useWindowSize();
  const viewBox = useViewBox(Number(month));

  const months = getMonthsOfYear(Number(year), windowSize);

  function handleClick(event: MouseEvent<SVGSVGElement>) {
    if (event.target instanceof SVGSVGElement) {
      router.push(`/${year}`);
    }
  }

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-screen"
      onClick={(event) => handleClick(event)}
    >
      <g transform="translate(0, 0)">
        {[...months.entries()].map(([index, month]) => (
          <Month key={index} path={month.path} index={index} />
        ))}
      </g>
    </svg>
  );
}
