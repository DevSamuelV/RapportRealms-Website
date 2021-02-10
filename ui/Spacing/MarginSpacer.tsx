import { ReactChild } from "react";

type props = {
  spacing: number;
  children: ReactChild[] | ReactChild;
  inline: boolean;
};

export function MarginSpacer({ spacing, children, inline }: props) {
  return (
    <div className={`flex m-${spacing} ${inline && `inline-flex`}`}>
      {children}
    </div>
  );
}
