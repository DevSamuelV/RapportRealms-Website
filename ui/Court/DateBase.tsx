import { ReactChild } from "react";

type Props = {
  children: ReactChild[] | ReactChild;
};

export function DateBase({ children }: Props) {
  return (
    <ul className="grid grid-cols-1 p-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
}
