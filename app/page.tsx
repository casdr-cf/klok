import { getYear } from "date-fns";
import Year from "./components/Year";

const currentYear = getYear(new Date());

export default function Home() {
  return (
    <main>
      <Year year={currentYear} />
    </main>
  );
}
