import Month from "@/app/components/Month";
import { getMonthsOfYear } from "./utils";

interface Props {
  year: number;
}

export default function Year({ year }: Props) {
  const months = getMonthsOfYear(year);

  return (
    <svg
      viewBox="0 0 100 100"
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
