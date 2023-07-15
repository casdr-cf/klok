"use client";

import Month from "@/app/components/Month";
import { MonthsMap } from "./utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { zoom } from "d3-zoom";

function getViewBox(year: string, month?: string) {
  const standardViewBox = "0 0 100 100";

  if (!month) return standardViewBox;

  const monthPathElement: SVGPathElement | null = document.querySelector(
    `#month-${Number(month) - 1}`,
  );

  if (monthPathElement) {
    const { x, y, width, height } = monthPathElement.getBBox();

    const x1 = x,
      y1 = y,
      x2 = x1 + width,
      y2 = y1 + height;
    console.log({ x1, x2, y1, y2 });

    // const zoom = Math.min(8, 0.9 / Math.max((x2 - x1) / 100, (y2 - y1) / 100));
    // console.log(zoom);

    const z = zoom();
    console.log;

    // return `${-(x1 + x2) / 2} ${-(y1 - y2) / 2} ${100 / zoom} ${100 / zoom}`;
    // return `${100 / zoom / 2} ${-100 / zoom / 2} ${zoom * 10} ${zoom * 10}`;
  }

  return standardViewBox;
}

interface Props {
  months: MonthsMap;
}

export default function YearCircle({ months }: Props) {
  const { year, month } = useParams();
  const [viewBox, setViewBox] = useState("0 0 100 100");

  //   useEffect(() => {
  //     setViewBox(getViewBox(year, month));
  //   }, [year, month]);

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50, 50)">
        {[...months.entries()].map(([index, month]) => (
          <Month key={index} path={month.path} index={index} />
        ))}
      </g>
    </svg>
  );
}
