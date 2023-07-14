import { isExists } from "date-fns";

interface YearParams {
  year: string;
}

export default function YearPage({ params }: { params: YearParams }) {
  const year = Number(params.year);
  const isYear = isExists(year, 1, 1);

  if (!isYear) return <>`${year} is not a valid year'</>;
}
