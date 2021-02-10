import React from "react";
import { Rule } from "../ui/rules/Rules";
import { Title } from "../ui/Title/Title";

export default class Rules extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <h2
          className={`w-max select-none text-center text-5xl font-extrabold text-gray-900`}
        >
          Rules
          <span className="ml-4 flex-shrink-0 inline-block align-middle px-3 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
            Updated: 2/10/21
          </span>
        </h2>

        <div className="flex flex-col place-self-center mt-9 text-left ">
          <Rule.title size="text-xl" text="1. No Unconsented PvP" />
          <Rule.desc
            text="You Are Not Allowed to kill anyone unless they give you consent."
            size="text-lg"
          />

          <Rule.title size="text-xl" text="2. Self Defence" />
          <Rule.desc
            text="You Are Allowed to Defend your self only if the player is trying to harm you."
            size="text-lg"
          />

          <Rule.title size="text-xl" text="3. No Theft" />
          <Rule.desc
            text="You Are Not Allowed to Steal anything that belongs to a player or faction."
            size="text-lg"
          />

          <Rule.title size="text-xl" text="4. Municipality Jurisdiction" />
          <Rule.desc
            text="if a base has a book of law that book is the law of the area of that base (yes I know the grammar is trash) ."
            size="text-lg"
          />
        </div>
      </div>
    );
  }
}
