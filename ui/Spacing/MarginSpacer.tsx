import { ReactChild } from "react";

type props = {
  spacing: number;
  children: ReactChild[] | ReactChild;
  inline: boolean;
  fullWidth?: boolean | false;
};

export function MarginSpacer({ spacing, children, inline, fullWidth }: props) {
  return (
    <div
      className={`flex m-${spacing} ${inline && `inline-flex`} ${
        fullWidth && "w-full"
      }`}
    >
      {children}
    </div>
  );
}
