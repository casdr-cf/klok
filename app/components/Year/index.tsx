"use client";

import Month from "@/app/components/Month";
import { getMonthsOfYear, getViewBox } from "./utils";
import { useParams, useRouter } from "next/navigation";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { useEffect, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

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
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-screen w-full"
      onClick={(event) => handleClick(event)}
      animate={{ viewBox }}
      transition={{ duration: 0.4, ease: [0.43, 0.15, 0.26, 0.97] }}
    >
      <g transform="translate(0, 0)">
        {[...months.entries()].map(([index, month]) => (
          <Month key={index} path={month.path} index={index} />
        ))}
      </g>
    </motion.svg>
  );
}
