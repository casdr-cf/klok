import { redirect } from "next/navigation";
import { getYear } from "date-fns";

export default function Page() {
  const currentYear = getYear(new Date());

  redirect(`${currentYear}`);
}
