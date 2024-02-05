import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input() {
  const inputRef = useRef(null);

  let value = ''

  function handleChange() {
    value = inputRef.current.value;
    // Do something with the value
    console.log(value)
  }

  // This prevents mouse clicking!!
  document.onmousedown = (e) => {
    e.preventDefault();
  }
  //Remove above code inf necessary in the future

  useEffect(() => {
    function listener(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        e.preventDefault();
        // callMyFunction();
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