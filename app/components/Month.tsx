import { IMonth } from "@/app/types";

interface Props extends Pick<IMonth, "path"> {}

export default function Month({ path }: Props) {
  return (
    <path
      d={path}
      strokeWidth={0.1}
      className="stroke fill-white stroke-black"
    />
  );
}
