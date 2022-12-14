import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const [Text, setText] = useState("Enter text here...");
  // Text represent the current state and we can use setText to update or change the state
  // setText="hey";    wrong way to change the state
  // setText("i'm the correct way");    correct way to change the state
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          value={Text}
          rows="7"
        ></textarea>
        {/*Here Text is a state */}
        <button className="btn btn-primary my-3">Convert to Uppercase</button>
      </div>
    </div>
  );
}
