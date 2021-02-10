import { DescProps } from "../../props/rules/Desc";
import { TitleProps } from "../../props/rules/title";
import { Title } from "../rules/Title";
import { Desc } from "./Desc";

export class Rule {
  public static title = (props: TitleProps) => {
    return <Title size={props.size} text={props.text} />;
  };

  public static desc = (props: DescProps) => {
    return <Desc text={props.text} size={props.size} />;
  };
}
