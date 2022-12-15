import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils-dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-4">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze " mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
