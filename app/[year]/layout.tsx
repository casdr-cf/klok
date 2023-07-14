import { isExists } from "date-fns";
import Year from "@/app/components/Year";

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
      <div className="h-screen flex justify-center items-center">
        <div className="w-[100vmin] aspect-square">
          <Year year={year} />
        </div>
      </div>
    </main>
  );
}
