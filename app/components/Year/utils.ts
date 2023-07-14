import {
  getDayOfYear,
  getDaysInMonth,
  getDaysInYear,
  startOfMonth,
} from "date-fns";
import { INNER_RADIUS, OUTER_RADIUS, TWO_PI } from "./constants";
import { arc } from "d3-shape";
import { IMonth } from "@/app/types";

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
    .endAngle(endAngle)
    .padAngle(0.01)
    .cornerRadius(0.4)()!;

  return path;
}

export type MonthsMap = Map<number, IMonth>;

export function getMonthsOfYear(year: number) {
  const months: MonthsMap = new Map();
  const numOfMonths = 12;

  for (let i = 0; i < numOfMonths; i++) {
    months.set(i, {
      path: monthPath({
        year,
        innerRadius: INNER_RADIUS,
        outerRadius: OUTER_RADIUS,
        monthIndex: i,
      }),
    });
  }

  return months;
}
