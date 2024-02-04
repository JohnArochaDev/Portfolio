import './Terminal.css';
import Input from './Input/Input'
import { ReactTyped } from "react-typed";
import { type } from '@testing-library/user-event/dist/type';
import { useState } from "react";

export default function Terminal() {

  const [text, setText] = useState([
  ['Welcome'],
  ['Type in a command to get started'],
  ['If you feel lost type: help']
])
//Create a function that iterates through the array of arrays, 
//does a typescript on each one, and places it inside of the div with the ID of textBox

  return (
    <div className="terminal cristal">
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
      <div id='textBox'>

      </div>
      <Input />
    </div>
  );
};