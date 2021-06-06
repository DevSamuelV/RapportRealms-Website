import React from "react";
import { Rule } from "../ui/rules/Rules";

export default class Rules extends React.Component {
	private updatedDate = "6/6/21";

	render() {
		return (
			<div className="flex flex-col">
				<h2
					className={`w-max select-none text-center text-5xl font-extrabold text-gray-900`}
				>
					Rules
					<span className="ml-4 flex-shrink-0 inline-block align-middle px-3 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
						Updated: {this.updatedDate}
					</span>
				</h2>

				<div className="flex flex-col place-self-center mt-9 text-left ">
					<Rule.title size="text-xl" text="1. No Unconsented PvP" />
					<Rule.desc
						text="You are not allowed to kill anyone inside there base unless they give you consent."
						size="text-lg"
					/>

					<Rule.title size="text-xl" text="2. Self Defense" />
					<Rule.desc
						text="You are allowed to defend your self only if the player is trying to harm you or someone else."
						size="text-lg"
					/>

					<Rule.title size="text-xl" text="3. No Theft" />
					<Rule.desc
						text="You are not allowed to steal anything that belongs to a player or faction."
						size="text-lg"
					/>

					<Rule.title size="text-xl" text="4. Municipality Jurisdiction" />
					<Rule.desc
						text="any base can enforce it's own set of rules, by placing a book a the entrance of the base containing the rules."
						size="text-lg"
					/>

					<Rule.title size="text-xl" text="5. No Griefing" />
					<Rule.desc
						text="You are not allowed to cause any destruction at all to a base that you don't own."
						size="text-lg"
					/>

					<Rule.title size="text-xl" text="6. No Cheat Clients" />
					<Rule.desc
						text="You are not allowed to use any form of cheat's or cheat clients."
						size="text-lg"
					/>

					{/* <Rule.title size="text-xl" text="5. Trespassing" />
          <Rule.desc
            text="You Are Now Allowed to Trespassing on privately declared property unless you have permission other wise you will be jailed for 5min."
            size="text-lg"
          /> */}
				</div>
			</div>
		);
	}
}
