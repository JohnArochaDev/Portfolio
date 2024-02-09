import './Terminal.css';
import Input from './Input/Input'
import WindowsXP from './WindowsXP/WindowsXP';
import TypingEffect from './TypingEffect/TypingEffect';
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

export default function Terminal({setFocus, focus, iFrame, setIframe, setUrl, url}) {

  const [completedTexts, setCompletedTexts] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [arrayIndex, setArrayIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [canText, setCanText] = useState([false])
  const [userInput, setUserInput] = useState([[]])
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
    ['project 1'],
    ['project 2'],
    ['project 3'],
    ['about me'],
    ['npm i'],
    ['hire me'],
    ['clear'],
  ])

  useEffect(() => { 
    if (text.length > 20){
      document.querySelector('.scrollIntoView').scrollIntoView(false)
    }
  });

  return (
    <div 
    className="terminal cristal"
    onClick={() => setFocus(!focus)}
    >
      <p className="text" >
        Hello! My name is John Arocha
      </p>
      <TypingEffect
        completedTexts={completedTexts}
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
        url={url}
        setUrl={setUrl}
        iFrame={iFrame}
        setIframe={setIframe}
      />
      
      <div className='scrollIntoView'></div>
    </div>
  );
};