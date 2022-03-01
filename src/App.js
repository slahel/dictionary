import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Dictionary</h1>
        <Dictionary />
        <footer>
          Coded by Stephanie Lahellec. Check the open source on{" "}
          <a
            href="https://github.com/slahel/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
