import "./App.css";
import Dictionary from "./Dictionary";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        Coded by Stephanie Lahellec. Check the open source on{" "}
        <a
          href="https://github.com/slahel/dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaGithub />
        </a>
      </footer>
    </div>
  );
}

export default App;
