import { useState, useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'
import checkCode from './checkCode'

export default function Input({ text, setText, userInput, setUserInput, canText, setCanText, codes }) {

  document.onmousedown = (e) => { // This prevents mouse clicking!!
    e.preventDefault();
  } //Remove above code inf necessary in the future
  
  const inputRef = useRef(null);
  let value = ''

  function handleChange(e) {
    value = inputRef.current.value;
    value.toLowerCase()
    setUserInput([e.target.value])
    // Do something with the value
  }

  function codeCheck(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  useEffect(() => {
    function listener(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        checkCode(userInput)
        e.preventDefault();
        setText([...text, [], [userInput]])
        setUserInput([value])
        setTimeout(() => {// on a timer, clears out the value of the input
          setUserInput([''])
        }, 500);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [value, text, setText, setUserInput, userInput]);

  return (
    <p className="input">➜ <input ref={inputRef} onChange={handleChange} className="inputBack" type="text" autoFocus={true} value={userInput} /></p>
  )
}