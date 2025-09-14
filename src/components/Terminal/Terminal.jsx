import './Terminal.css';
import Input from './Input/Input'
import TypingEffect from './TypingEffect/TypingEffect';
import { useState, useEffect } from "react";

export default function Terminal({setFocus, focus, iFrame, setIframe, setUrl, url, setVideoType, setVideo}) {

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
  const codes = [
    ['help'],
    ['ls'],
    ['projects'],
    ['cd project 1'],
    ['cd project 2'],
    ['cd project 3'],
    ['cd project 4'],
    ['about me'],
    ['npm i'],
    ['hire me'],
    ['github'],
    ['linkedin'],
    ['clear'],
  ]

  useEffect(() => { //keeps the bottom of the input in view
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
        setVideoType={setVideoType}
        setVideo={setVideo}
      />
      
      <div className='scrollIntoView'></div>
    </div>
  );
};