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
            setText([...text, 
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0'],
              ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Welcome to my virtual command center! This mock terminal is your gateway to"],
              ["\u00A0\u00A0\u00A0exploring my digital portfolio. Type 'help' to discover the available commands and "],
              ["\u00A0\u00A0\u00A0navigate through my work and background. Whether you're interested in viewing my "],
              ["\u00A0\u00A0\u00A0projects ('work'), learning more about me ('about'), or getting in touch ('contact'), this "],
              ["\u00A0\u00A0\u00A0interactive platform is designed to showcase my journey as a full-stack web developer "],
              ["\u00A0\u00A0\u00A0and former 3D artist. Dive in and enjoy the personalized experience!"],
              ["\u00A0\u00A0\u00A0"],
              ["\u00A0\u00A0\u00A0Type 'all' to see all available commands"],
            ])

            return true;

          case 'all':
            // Run code below
            codex = true;
            setText([...text, ['about me \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- A little about me and a list of my skills'],
            // ['\u00A0\u00A0'],
            ['help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- display help'],
            // ['\u00A0\u00A0'],
            ['all \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- display all commands'],
            // ['\u00A0\u00A0'],
            ['projects \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- display projects'],
            // ['\u00A0\u00A0'],
            ['projects 1 \u00A0\u00A0\u00A0\u00A0-- open project 1'],
            // ['\u00A0\u00A0'],
            ['projects 2 \u00A0\u00A0\u00A0\u00A0-- open project 2'],
            // ['\u00A0\u00A0'],
            ['projects 3 \u00A0\u00A0\u00A0\u00A0-- open project 3'],
            // ['\u00A0\u00A0'],
            ['npm i \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- install resume'],
            // ['\u00A0\u00A0'],
            ['hire me \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- get in touch with me!'],
            // ['\u00A0\u00A0'],
            ['clear \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- clear console'],
          ]) 

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
            setText([...text, 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_.-"""""-._'],
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
              ['/jgs::::::::|/::\\/:\\|:::::\\'],
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0About Me:'],
              ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hello, I'm John Arocha, a full-stack web developer and General Assembly graduate "],
              ["\u00A0\u00A0\u00A0with a background as a 3D artist. My journey from the visual arts to software "],
              ["\u00A0\u00A0\u00A0engineering brings a creative edge and meticulous attention to detail to my work. As a "],
              ["\u00A0\u00A0\u00A0full-stack engineer, I apply a unique perspective to problem-solving and strive to "],
              ["\u00A0\u00A0\u00A0create both functional and visually appealing digital solutions. Let's collaborate to turn "],
              ["\u00A0\u00A0\u00A0your ideas into innovative web experiences."],
              ['\u00A0\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0Skills:'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Languages: JavaScript, HTML, CSS, Python, SQL, JSON, Typescript, EJS, DTL, JSX'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Database: PostgreSQL, MongoDB'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Libraries and Frameworks: React (class based and hooks), Express.js, Django, jQuery, Bootstrap, Materialize, Node.js, Mongoose, Axios, Django Rest Framework'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Other - RESTful Routing, JSON API, MERN stack'],
            ])
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
