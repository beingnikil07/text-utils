import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("mybox");
    newText.select(); // selects the text
    navigator.clipboard.writeText(newText.value);
  };
  const handleExtraSpaceClick = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState(""); //removing the default value of textarea

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            value={Text}
            rows="7"
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleCopyClick}
          >
            Copy
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleExtraSpaceClick}
          >
            Remove extra space
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>{" "}
        {/* 0.008 is the time of reading one word in minutes */}
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
