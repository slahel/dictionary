import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Dictionary</h1>
        <Dictionary />
        <footer>
          Check the open source on{" "}
          <a href="https://github.com/slahel/dictionary">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
