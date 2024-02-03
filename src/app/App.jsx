import './App.css';
import { ReactTyped } from "react-typed";

const App = () => {
  return (
    <div>
      <p className="text" >
        Welcome to{" "}
        <ReactTyped strings={["My React App"]} typeSpeed={100} />
      </p>
    </div>
  );
};

export default App;