import './Terminal.css';
import { ReactTyped } from "react-typed";

export default function Terminal() {
  return (
    <div>
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
    </div>
  );
};