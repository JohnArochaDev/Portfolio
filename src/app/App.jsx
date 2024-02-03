import './App.css';
import { ReactTyped } from "react-typed";

const App = () => {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <ReactTyped strings={["My React App"]} typeSpeed={100} loop />
      </h1>
    </div>
  );
};

export default App;