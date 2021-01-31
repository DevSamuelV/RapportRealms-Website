import React from "react";
import { JailedBase } from "../ui/Jailed/JailedBase";
import { JailedElement } from "../ui/Jailed/JailedElement";
import { MarginSpacer } from "../ui/Spacing/MarginSpacer";
import { PaddingSpacing } from "../ui/Spacing/PaddingSpacing";

export default class Jailed extends React.Component {
  render() {
    return (
      <div className="flex justify-center w-full">
        <PaddingSpacing padding={2}>
          <JailedBase>
            <JailedElement
              name="EK_STARZ"
              img="https://crafatar.com/avatars/7100de434d2545fd9ca40a7609949a0b"
            />
          </JailedBase>
        </PaddingSpacing>
      </div>
    );
  }
}
