import { ReactChild } from "react";

type Props = {
  children: ReactChild[] | ReactChild;
  position: "right" | "left" | "center";
};

export function NavButtonContainer({ children, position }: Props) {
  return (
    <div
      className={`hidden md:ml-6 md:flex md:items-center ${
        (position == "right" && "justify-start") ||
        (position == "left" && "justify-end") ||
        (position == "center" && "justify-center")
      }`}
    >
      {children}
    </div>
  );
}
