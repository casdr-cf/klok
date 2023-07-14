import { getMonthsOfYear } from "./utils";
import YearCircle from "./YearCircle";

interface Props {
  year: number;
}

export default function Year({ year }: Props) {
  const months = getMonthsOfYear(year);

  return <YearCircle months={months} />;
}
