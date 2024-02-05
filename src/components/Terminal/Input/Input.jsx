import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input({ text, setText }) {
  const inputRef = useRef(null);
  let value = ''

  function handleChange() {
    value = inputRef.current.value;
    // Do something with the value
  }

  document.onmousedown = (e) => { // This prevents mouse clicking!!
    e.preventDefault();
  } //Remove above code inf necessary in the future

  useEffect(() => {
    function listener(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        e.preventDefault();
        console.log(value)
        console.log(text)
        setText([...text, [value]])
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <p className="input">➜ <input ref={inputRef} onChange={handleChange} className="inputBack" type="text" autoFocus={true} /></p>
  )
}