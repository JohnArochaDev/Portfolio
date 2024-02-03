import './Terminal.css';
import Input from './Input/Input'
import { ReactTyped } from "react-typed";

export default function Terminal() {
  return (
    <div className="terminal cristal">
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
      <Input />
    </div>
  );
};