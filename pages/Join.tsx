import React from "react";
import { Button, RedButton } from "../ui/Button/Button";
import { InputWithLabel } from "../ui/Input/InputWithLabel";

export default class Join extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 p-3 ml-2 mr-2 rounded-xl">
        <h2 className="text-xl font-bold text-center mb-3">
          Join Rapport Realms
        </h2>

        <InputWithLabel label="Username" placeholder="Dream" />
        <div className="flex justify-end mt-4">
          {/* <RedButton text="Send" /> */}
        </div>
      </div>
    );
  }
}
