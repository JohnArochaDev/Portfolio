import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input({ text, setText, userInput, canText, setCanText,  setUserInput, codes }) {
  
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


  // let codex
  // let i = 0
  // userInput.forEach((c) => {
  //   c.find((code) => {
  //     if (code === 'help') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'all') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'projects') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'projects 1') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'projects 2') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'projects 3') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'about me') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'npm i') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'hire me') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }else if (code === 'clear') {
  //       // Run code below
  //       codex = true;
  //       return true;
  //     }
  //     i++;
  //   });
  //   if (!codex) {
  //     codex = false;
  //     return false
  //   }
  // });
  //write a forEach function that iterates through codes and looks for help with .find
  let codex

  userInput.find((code) => {
    if (code === 'help') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'all') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'projects') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'projects 1') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'projects 2') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'projects 3') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'about me') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'npm i') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'hire me') {
      // Run code below
      codex = true;
      return true;
    }else if (code === 'clear') {
      // Run code below
      codex = true;
      return true;
    }
    if (!codex) {
      codex = false;
      return false
    }
  });

  console.log('codex is ', codex);

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