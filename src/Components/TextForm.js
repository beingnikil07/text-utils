import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("you have clicked handleUpClick");
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log(event.target.value);
    setText(event.target.value); // for setting the value of textarea
  };
  const [Text, setText] = useState("Enter text here...");

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          onChange={handleOnChange}                 
          value={Text}
          rows="7"
        ></textarea>
         {/*Onchange event ko listen karna isliye imp tha warna mai type nii krr paata  kyuki hum value mai state pass kra rhe hai*/}
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
