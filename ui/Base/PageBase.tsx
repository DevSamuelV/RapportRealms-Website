import { ReactChild } from "react";

type Props = {
  children: ReactChild | ReactChild[];
};

export function PageBase({ children }: Props) {
  return <div>{children}</div>;
}
