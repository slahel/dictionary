import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        Coded by Stephanie Lahellec, check the open sources on{" "}
        <a href="https://github.com/slahel/dictionary" target="_blank">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
