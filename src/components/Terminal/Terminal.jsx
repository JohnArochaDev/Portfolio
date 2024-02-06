import './Terminal.css';
import Input from './Input/Input'
import TypingEffect from './TypingEffect/TypingEffect';
import { ReactTyped } from "react-typed";
import { type } from '@testing-library/user-event/dist/type';
import { useState } from "react";

export default function Terminal() {

  const [completedTexts, setCompletedTexts] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [arrayIndex, setArrayIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [text, setText] = useState([
    [],
    ['Welcome'],
    ['Type in a command to get started'],
    ['If you feel lost type: help']
  ])

  const [codes, setCodes] = useState([
    ['help'],
    ['all'],
    ['projects'],
    ['projects 1'],
    ['projects 2'],
    ['projects 3'],
    ['about me'],
    ['npm i'],
    ['hire me'],
    ['clear'],
  ])

  const [canText, setCanText] = useState([false])

  const [userInput, setUserInput] = useState([[]])

  return (
    <div className="terminal cristal">
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
      <TypingEffect completedTexts={completedTexts}
       setCompletedTexts={setCompletedTexts}
        textArrays={text}
        currentText={currentText}
        setCurrentText={setCurrentText}
        arrayIndex={arrayIndex}
        setArrayIndex={setArrayIndex}
        stringIndex={stringIndex}
        setStringIndex={setStringIndex}
        charIndex={charIndex}
        setCharIndex={setCharIndex}
        />
      <Input 
        text={text} 
        setText={setText} 
        canText={canText} 
        setCanText={setCanText}
        userInput={userInput}
        setUserInput={setUserInput}
        codes={codes}
        completedTexts={completedTexts} 
        setCompletedTexts={setCompletedTexts}
        currentText={currentText}
        setCurrentText={setCurrentText}
        arrayIndex={arrayIndex}
        setArrayIndex={setArrayIndex}
        stringIndex={stringIndex}
        setStringIndex={setStringIndex}
        charIndex={charIndex}
        setCharIndex={setCharIndex}
      />
    </div>
  );
};