import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input({ text, setText, canText, setCanText, userInput, setUserInput, codes }) {
  
  document.onmousedown = (e) => { // This prevents mouse clicking!!
    e.preventDefault();
  } //Remove above code inf necessary in the future
  
  const inputRef = useRef(null);
  let value = ''

  function handleChange() {
    value = inputRef.current.value;
    value.toLowerCase()
    // Do something with the value
  }

  function codeCheck(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  //write a forEach function that iterates through codes and looks for help with .find
  let codex

codes[0].find((code) => {
  if (code == 'help') {
    return codex = true
  }
})

console.log('codex is ',codex)

  useEffect(() => {
    function listener(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        e.preventDefault();
        console.log(value)
        console.log(text)
        setText([...text, [], [value]])
      }
    };
    document.addEventListener("keydown", listener);
  }, [value, text, setText]);

  return (
    <p className="input">➜ <input ref={inputRef} onChange={handleChange} className="inputBack" type="text" autoFocus={true} /></p>
  )
}