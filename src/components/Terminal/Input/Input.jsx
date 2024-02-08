import { useEffect } from 'react';
import { useRef } from 'react';
import './Input.css'

export default function Input({ iFrame, setIframe, url, setUrl, text, setText, userInput, setUserInput, canText, setCanText, codes, setCompletedTexts, completedTexts, textArrays, currentText, setCurrentText, arrayIndex, setArrayIndex, stringIndex, setStringIndex, charIndex, setCharIndex,}) {

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

  function newWindow1(){
    // route to new page by changing window.location
    window.open('https://weatherapp-ga.fly.dev/', "_blank") //to open new page
 }
  function newWindow2(){
    // route to new page by changing window.location
    window.open('https://drinks-app-t6mi.onrender.com/', "_blank") //to open new page
 }
  function newWindow3(){
    // route to new page by changing window.location
    window.open('https://johnarochadev.github.io/Battleship/', "_blank") //to open new page
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
              ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Welcome to my virtual command center! This mock terminal is your gateway to"],
              ["\u00A0\u00A0\u00A0exploring my digital portfolio. Type 'about me' to learn more about me, or "],
              ["\u00A0\u00A0\u00A0navigate through my work and background. Whether you're interested in viewing my "],
              ["\u00A0\u00A0\u00A0projects, learning more about me, or getting in touch, this "],
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
            ['project 1 \u00A0\u00A0\u00A0\u00A0-- open project 1'],
            // ['\u00A0\u00A0'],
            ['project 2 \u00A0\u00A0\u00A0\u00A0-- open project 2'],
            // ['\u00A0\u00A0'],
            ['project 3 \u00A0\u00A0\u00A0\u00A0-- open project 3'],
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
            //This should display info on all projects
            
            return true;

          case 'project 1':
            // Run code below
            setText([...text,
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0I crafted a dynamic and user-friendly weather application that seamlessly '],
              ['\u00A0\u00A0\u00A0integrates real-time weather information from around the world. Developed using '],
              ['\u00A0\u00A0\u00A0Express.js, JSX, and JavaScript, the application is not only feature-rich but also mobile-friendly,'],
              ['\u00A0\u00A0\u00A0ensuring a seamless experience across various devices. Through the clever '],
              ['\u00A0\u00A0\u00A0integration of a weather API and Google Maps API, users can effortlessly click on the '],
              ['\u00A0\u00A0\u00A0map to access accurate weather details for any location. The application offers full '],
              ['\u00A0\u00A0\u00A0CRUD functionality, enabling users to save their preferred locations and assign '],
              ['\u00A0\u00A0\u00A0personalized nicknames. This mobile-friendly weather application stands out in my '],
              ['\u00A0\u00A0\u00A0portfolio, showcasing not only my expertise in web development and API integration '],
              ['\u00A0\u00A0\u00A0but also a commitment to providing an accessible and enjoyable user experience '],
              ['\u00A0\u00A0\u00A0across different devices.'],
            ])
            setTimeout(() => {
            newWindow1()}, 4000)
            return true;

          case 'cd project 1':
            // Run code below
            //Add functionality where when you open a project, and old fashioned windows xp div with an iframe displays your webpage
            setUrl('https://weatherapp-ga.fly.dev/')
            setIframe(true)
            return true;

          case 'project 2':
            // Run code below
            setText([...text, 
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
            ])
            newWindow2()
            return true;

          case 'cd project 2':
            // Run code below
            //Add functionality where when you open a project, and old fashioned windows xp div with an iframe displays your webpage
            setUrl('https://drinks-app-t6mi.onrender.com/')
            setIframe(true)
            return true;

          case 'project 3':
            // Run code below
            setText([...text, 
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
            ])
            newWindow3()
            return true;

          case 'cd project 3':
            // Run code below
            //Add functionality where when you open a project, and old fashioned windows xp div with an iframe displays your webpage
            setUrl('https://johnarochadev.github.io/Battleship/')
            setIframe(true)
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
            setUrl('https://gifer.com/embed/fzNE')
            setIframe(null)
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
