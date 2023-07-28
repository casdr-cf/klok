import {
  getDayOfYear,
  getDaysInMonth,
  getDaysInYear,
  startOfMonth,
} from "date-fns";
import { arc } from "d3-shape";
import { IMonth } from "@/app/types";
import { WindowSize } from "@/app/hooks/useWindowSize";

const TWO_PI = Math.PI * 2;

function getMonthAngles(year: number, startDay: number, endDay: number) {
  const daysInYear = getDaysInYear(new Date(year));

  const startAngle = (TWO_PI / daysInYear) * startDay;
  const endAngle = (TWO_PI / daysInYear) * endDay;

  return { startAngle, endAngle };
}

function monthPath({
  year,
  monthIndex,
  innerRadius,
  outerRadius,
}: {
  year: number;
  monthIndex: number;
  innerRadius: number;
  outerRadius: number;
}) {
  const daysInMonth = getDaysInMonth(new Date(year, monthIndex));

  const startDay = getDayOfYear(startOfMonth(new Date(year, monthIndex)));
  const endDay = startDay + daysInMonth;

  const { startAngle, endAngle } = getMonthAngles(year, startDay, endDay);

  const path = arc<void, void>()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle)()!;

  return path;
}

const PADDING = 40;
const MONTH_WIDTH = 40;

export type MonthsMap = Map<number, IMonth>;

export function getMonthsOfYear(year: number, windowSize: WindowSize) {
  const months: MonthsMap = new Map();
  const numOfMonths = 12;

  const smallestSide = Math.min(windowSize.width, windowSize.height) - PADDING;

  for (let i = 0; i < numOfMonths; i++) {
    months.set(i, {
      path: monthPath({
        year,
        innerRadius: smallestSide / 2,
        outerRadius: smallestSide / 2 - MONTH_WIDTH,
        monthIndex: i,
      }),
    });
  }

  return months;
}

export function getViewBox(
  windowSize: WindowSize,
  month: number | null = null,
) {
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

  const PADDING = 50;

  return `${x - PADDING / 2} ${y - PADDING / 2} ${monthWidth + PADDING} ${
    monthHeight + PADDING
  }`;
}
