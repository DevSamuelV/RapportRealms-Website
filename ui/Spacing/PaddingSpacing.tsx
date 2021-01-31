import { ReactChild } from "react";

type Props = {
  padding: number;
  children: ReactChild;
};

export function PaddingSpacing({ padding, children }: Props) {
  return <div className={`p-${padding}`}>{children}</div>;
}
