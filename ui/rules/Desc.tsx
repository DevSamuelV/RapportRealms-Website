import { DescProps } from "../../props/rules/Desc";

export function Desc({ size, text }: DescProps) {
  return <p className={` ${size} text-black mt-1 mb-5 max-w-xl`}>{text}</p>;
}
