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
      <p className="tcomands">Welcome</p>
      <p className="tcomands">Type in a command to get started</p>
      <p className="tcomands">If you feel lost type: help</p>
      <Input />
    </div>
  );
};