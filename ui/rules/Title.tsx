import { TitleProps } from "../../props/rules/title";

export function Title({ text, center, size }: TitleProps) {
  return (
    <h2
      className={`w-max select-none ${
        center && `text-center`
      } ${size} font-extrabold text-gray-900`}
    >
      {text}
    </h2>
  );
}
