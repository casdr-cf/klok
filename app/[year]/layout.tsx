import { isExists } from "date-fns";
import { ReactNode } from "react";
import Year from "../components/Year";

export default function CalendarLayout({
  params,
}: {
  params: { year: string };
}) {
  const year = Number(params.year);
  const isYear = isExists(year, 1, 1);

  if (!isYear) return <>`${year} is not a valid year'</>;

  return (
    <main>
      <Year year={year} />
    </main>
  );
}
