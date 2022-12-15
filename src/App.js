import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#143153";
      document.title = "TextUtils-dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light mode";
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        about="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze " mode={mode} />
      </div>
    </>
  );
}
export default App;
