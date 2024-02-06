import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input({ text, setText, userInput, setUserInput, canText, setCanText, codes, setCompletedTexts, completedTexts, textArrays, currentText, setCurrentText, arrayIndex, setArrayIndex, stringIndex, setStringIndex, charIndex, setCharIndex,}) {

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

  function checkCode(userInput) {
    let codex
    userInput.find((code) => {  //write a function that looks through userInput with .find
      userInput.find((code) => {  //write a function that looks through userInput with .find
        switch (code) {
          case 'help':
            // Run code below
            codex = true;
            console.log(codex)
            return true;
          case 'all':
            // Run code below
            codex = true;
            console.log(codex)
            console.log(text)
            setText([...text, ['about me'], ['help'], ['all'], ['projects'], ['projects 1'], ['projects 2'], ['projects 3'], ['npm i'], ['hire me'], ['clear'],]) 
            return true;

          case 'projects':
            // Run code below
            
            return true;

          case 'projects 1':
            // Run code below
            //Add functionality where when you open a project, and old fashioned windows xp div with an iframe displays your webpage
            return true;

          case 'projects 2':
            // Run code below
            
            return true;

          case 'projects 3':
            // Run code below
            
            return true;

          case 'about me':
            // Run code below
            setText([...text, ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_.-"""""-._'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\\\u00A0.--.....-.\\'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0||\u00A0\u00A0.--.\u00A0\u00A0.--|/'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0|'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\_\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_)\u00A0\u00A0|'],
      ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0,____,\u00A0;'],
      ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\\\u00A0\u00A0`--'\u00A0\u00A0/"],
      ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_./\\\u00A0\u00A0'.____.'"],
      ['\u00A0\u00A0\u00A0_.:::|\u00A0`\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\\:._'],
      ["\u00A0.::::::::`\\\u00A0'.\u00A0\u00A0\u00A0/\u00A0/::::."],
      ['/jgs::::::::|/::\\/:\\|:::::\\']])
            return true

          case 'npm i':
            // Run code below
            
            return true;
          case 'hire me':
            // Run code below
            
            return true;

          case 'clear':
            // Run code below
            setCompletedTexts(['If you feel lost type: help'])
            setText(['If you feel lost type: help'])
            setCurrentText('')
            setArrayIndex(1)
            setStringIndex(0)
            setCharIndex(0)
            console.log(text)
            return true;

          default:
            codex = false;
            console.log(codex)
            return false;

        }
      });
      return false
    })
  }

  useEffect(() => {
    function listener(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        setText([...text, [], userInput])
        checkCode(userInput)
        setUserInput([value])
        setTimeout(() => {// on a timer, clears out the value of the input
          setUserInput([''])
        }, 500);
      }
    };
    console.log(text)
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [value, text, setText, setUserInput, userInput]);

  return (
    <p className="input">➜ <input ref={inputRef} onChange={handleChange} className="inputBack" type="text" autoFocus={true} value={userInput} /></p>
  )
}
