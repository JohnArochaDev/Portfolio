import './Terminal.css';
import Input from './Input/Input'
import TypingEffect from './TypingEffect/TypingEffect';
import { ReactTyped } from "react-typed";
import { type } from '@testing-library/user-event/dist/type';
import { useState } from "react";

export default function Terminal() {

  const [text, setText] = useState([
    [],
    ['Welcome'],
    ['Type in a command to get started'],
    ['If you feel lost type: help']
  ])

  return (
    <div className="terminal cristal">
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
      <TypingEffect textArrays={text}/>
      <Input text={text} setText={setText} />
    </div>
  );
};