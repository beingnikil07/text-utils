import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <div>
      <NavBar title="TextUtils" about="About Textutils" />{" "}
      {/*Sending props to NavBar */}
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze " />
      </div>
    </div>
  );
}
export default App;
