import { useEffect, useState } from 'react';
import { useRef } from 'react';
import  fileSaver from 'file-saver';
import safePass from '../../../videos/safePass.mp4'
import './Input.css'

export default function Input({ setIframe, setUrl, text, setText, userInput, setUserInput, setCompletedTexts, setCurrentText, setArrayIndex,setStringIndex, setCharIndex, setVideoType, setVideo}) {

  const [download, setDownload] = useState(null)

  document.onmousedown = (e) => { // This prevents mouse clicking, just like a terminal
    e.preventDefault();
  }
  
  const inputRef = useRef(null);
  let value = ''

  function handleChange(e) {// this allows the input to be seen
    value = inputRef.current.value;
    value.toLowerCase()
    setUserInput([e.target.value])
  }

  const saveFile = () => {
    fileSaver.saveAs("/assets/John-Arocha's-Resume.pdf", "John's Resume.pdf");
  }

  function newTab(url) {
    window.open(url, "_blank")
  }

  // function addToClipbboard(text) {
  //   navigator.clipboard.writeText(text)
  // } 

  function checkCode(userInput) {
      userInput.find((code) => {
        switch (code) {
          case 'help':
            setText([...text, 
              ['help'],
              ['\u00A0\u00A0'],
              ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Welcome to my virtual command center! This mock terminal is your gateway to"],
              ["\u00A0\u00A0\u00A0exploring my digital portfolio. Type 'about me' to learn about me, or "],
              ["\u00A0\u00A0\u00A0navigate through my work and background. Weather you're interested in viewing my "],
              ["\u00A0\u00A0\u00A0projects, learning more about me, or getting in touch, this "],
              ["\u00A0\u00A0\u00A0interactive platform is designed to showcase my journey as a full-stack software engineer "],
              ["\u00A0\u00A0\u00A0and former 3D artist. Dive in and enjoy the personalized experience!"],
              ["\u00A0\u00A0\u00A0"],
              ["\u00A0\u00A0\u00A0Type 'ls' to see all available commands"],
            ])
            setDownload(null)
            return true

          case 'ls':
            setText([...text, 
              ['ls'],
              ['\u00A0\u00A0'],
              ['about me \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- A little about me and my skills'],
              ['help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- display help'],
              ['ls \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- display all commands'],
              ['project 1 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- open project 1'],
              ['project 2 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- open project 2'],
              ['project 3 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- open project 3'],
              ['project 4 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- open project 4'],
              ['cd project 2 \u00A0\u00A0\u00A0\u00A0\u00A0-- open project 2 in a new tab'],
              ['cd project 3 \u00A0\u00A0\u00A0\u00A0\u00A0-- open project 3 in a new tab'],
              ['linkedin \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- check out my LinkedIn'],
              ['github \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- check out my GitHub'],
              ['email \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- email me'],
              ['contact \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- get in touch with me'],
              ['npm i \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- install resume'],
              // ['cp phone \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- copy phone number'],
              // ['cp email \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- copy email'],
              ['clear \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-- clear console'],
            ])
            setDownload(null)
            return true

          case 'project 1':
            setText([...text,
              ['project 1'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0Project 1: SafePass Chrome extension, TS, React, Springboot'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0For my first project I Chrome extension called SafePass. It uses Typescript, React, Vite and '],
              ['\u00A0\u00A0\u00A0\u00A0Springboot. This application has many features, including an industry-standard encrypted database, password breech '],
              ['\u00A0\u00A0\u00A0\u00A0verification, auto saving and auto filling features, password generation, and many more features! The API includes '],
              ['\u00A0\u00A0\u00A0\u00A0 Swagger/OpenAPI documentation, account password hashing, JWT, and username and password encryption for saved passwords,  '],
              ['\u00A0\u00A0\u00A0\u00A0This chrome extension was a blast to build. I used to use it on my own devices (untill I got tired of paying for the backend and the DB).  '],
              ['\u00A0\u00A0\u00A0\u00A0I used mySql for the database, and I used vite on the front end to compile the project. '],
              ['\u00A0\u00A0\u00A0\u00A0Enjoy the quick video preview to showcase the functionality!'],
            ])
            setIframe(true)
            setVideoType(true)
            setVideo(safePass)
            setDownload(null)
            return true

          case 'project 2':
            setText([...text,
              ['project 2'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0Project 2: Handshake App with MERN Stack'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0For my second project I made Handshake, It is a sleek job-finding app that uses the robust MERN stack.'],
              ['\u00A0\u00A0\u00A0\u00A0It connects with a 3rd party API, aggregating job listings from all over the internet, including sources'],
              ['\u00A0\u00A0\u00A0\u00A0like Indeed and LinkedIn. Users can easily filter job opportunities by type. The React-based interface '],
              ['\u00A0\u00A0\u00A0\u00A0ensures a smooth, visually appealing experience. Behind the scenes, Handshake integrates with MongoDB '],
              ['\u00A0\u00A0\u00A0\u00A0and uses a  custom backend API, showcasing my proficiency in the MERN stack and third-party API '],
              ['\u00A0\u00A0\u00A0\u00A0integration. This project prioritizes functionality while underscoring my meticulous attention to '],
              ['\u00A0\u00A0\u00A0\u00A0detail, resulting in a polished and refined application.'],
              ['\u00A0\u00A0\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0\u00A0[You can explore the website in the pop up window or type \'cd project 1\' to open it in a new tab]'],
            ])
            setUrl('https://handshakee.netlify.app')
            setIframe(true)
            setDownload(null)
            return true

          case 'cd project 2':
            setText([...text,
              ['cd project 2'],
            ])
            newTab('https://handshakee.netlify.app')
            setDownload(null)
            return true

          case 'project 3':
            setText([...text, 
              ['project 3'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0Project 3: Drink Catalog App with Django, Python, and Materialize'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0For my third project, I ventured into the realm of web development with Django, '],
              ['\u00A0\u00A0\u00A0\u00A0Python, and Materialize to create a feature-packed Drink Catalog App. Leveraging the '],
              ["\u00A0\u00A0\u00A0\u00A0power of Django's backend capabilities, I seamlessly integrated an API to curate a "],
              ['\u00A0\u00A0\u00A0\u00A0catalog featuring 636 alcoholic and non-alcoholic drinks. The application interacts '],
              ['\u00A0\u00A0\u00A0\u00A0with a PostgreSQL database, providing a robust foundation for storing and managing '],
              ['\u00A0\u00A0\u00A0\u00A0drink data. Using the DTL template language, I designed a sleek and intuitive interface'],
              ['\u00A0\u00A0\u00A0\u00A0that not only displays comprehensive information about each drink, including '],
              ['\u00A0\u00A0\u00A0\u00A0ingredients and preparation instructions but also incorporates user authentication for '],
              ['\u00A0\u00A0\u00A0\u00A0a personalized experience.'],
              ['\u00A0\u00A0\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0One standout feature of this app is its user-centric approach – users can save their '],
              ['\u00A0\u00A0\u00A0\u00A0favorite drinks to a personalized database, allowing them to customize recipes and '],
              ['\u00A0\u00A0\u00A0\u00A0generate convenient shopping lists for crafting their preferred beverages. This project '],
              ['\u00A0\u00A0\u00A0\u00A0highlights my expertise in backend development, database management, and user'],
              ['\u00A0\u00A0\u00A0\u00A0authentication, demonstrating my commitment to creating engaging and practical '],
              ['\u00A0\u00A0\u00A0\u00A0web applications.'],
            ])
            newTab('https://drinks-app-bitter-voice-6309.fly.dev/')
            setDownload(null)
            return true

          case 'cd project 3':
            setText([...text,
              ['cd project 3'],
            ])
            newTab('https://drinks-app-bitter-voice-6309.fly.dev/')
            setDownload(null)
            return true

          case 'project 4':
            setText([...text, 
              ['project 4'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0Project 4: Battleship Game with JavaScript AI'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0'], 
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0In my fourth project, I delved into the realm of game development, creating a captivating '],
              ['\u00A0\u00A0\u00A0\u00A0Battleship Game using JavaScript, CSS, and HTML. What sets this project apart is the '],
              ['\u00A0\u00A0\u00A0\u00A0implementation of an AI opponent that elevates the gaming experience. Through '],
              ['\u00A0\u00A0\u00A0\u00A0meticulous coding, I engineered an AI that makes educated choices when targeting '],
              ['\u00A0\u00A0\u00A0\u00A0ships, enhancing the challenge for players. The seamless functionality of the AI creates '],
              ['\u00A0\u00A0\u00A0\u00A0an immersive and engaging gaming environment. The Battleship Game showcases my '],
              ['\u00A0\u00A0\u00A0\u00A0proficiency in front-end development and my ability to create not just visually '],
              ['\u00A0\u00A0\u00A0\u00A0appealing but also intelligently designed applications. This project reflects my '],
              ['\u00A0\u00A0\u00A0\u00A0commitment to pushing the boundaries of what can be achieved with web-based '],
              ['\u00A0\u00A0\u00A0\u00A0games, showcasing both creativity and technical prowess.'],
            ])
            newTab('https://johnarochadev.github.io/Battleship/')
            setDownload(null)
            return true

          case 'about me':
            setText([...text, 
              ['about me'],
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0'],
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
              ['/jpa::::::::|/::\\/:\\|:::::\\'],
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0About Me:'],
              ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Hello, I'm John Arocha, a full-stack web developer, working at Fiserv/Clover, "],
              ["\u00A0\u00A0\u00A0with a background as a 3D artist. My journey from the visual arts to software "],
              ["\u00A0\u00A0\u00A0engineering brings a creative edge and meticulous attention to detail to my work. As a "],
              ["\u00A0\u00A0\u00A0full-stack engineer, I apply a unique perspective to problem-solving and strive to "],
              ["\u00A0\u00A0\u00A0create both functional and visually appealing digital solutions. Let's collaborate to turn "],
              ["\u00A0\u00A0\u00A0your ideas into innovative web experiences."],
              ['\u00A0\u00A0\u00A0'],
              ['\u00A0\u00A0\u00A0Skills:'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Languages: TypeScript, Java, JavaScript, C#, Python, HTML, CSS, EJS, DTL, JSX'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Database: PostgreSQL, MongoDB, SQL, mySQL'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Libraries and Frameworks: React (class based and hooks), SpringBoot, Vite, Express, Django, jQuery,'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Bootstrap, Materialize, Node.js, Mongoose, Axios, Django Rest Framework'],
              ['\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Other - Docker, RESTful Routing, JSON API, MERN, MEAN'],
            ])
            setDownload(null)
            return true

          case 'email':
            setText([...text, ['email']])
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jparocha777@gmail.com&su=Your%20Hired!', '_blank');
            setDownload(null)
            return true

          case 'npm i':
            setText([...text,['npm i'], ['would you like to download my resume? [y/n]']])
            setDownload(true)
            return true

          case 'y':
            if (download){
              setDownload('y')
              setText([...text, ['Downloading...']])
              saveFile()
            }
            setDownload(null)
            return true

          case 'n':
            setDownload(null)
            setText([...text, ['Download canceled...']])
            return true
              

          case 'contact':
            setText([...text, 
              ['contact'],
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0Feel free to reach out via LinkedIn, email or phone. I look forward '],
              ['\u00A0\u00A0to connecting with you!'],
              ['\u00A0\u00A0'],
              ['\u00A0\u00A0Phone: (713) 550-4133'],
              ['\u00A0\u00A0Email: jparocha777@gmail.com  [try cmd \'email\']'],
              ['\u00A0\u00A0LinkedIn: https://www.linkedin.com/in/johnarocha/  [try cmd \'linkedin\']'],
              ['\u00A0\u00A0GitHub: https://github.com/JohnArochaDev  [try cmd \'github\']'],
            ])
            setDownload(null)
            return true

          case 'github':
            setText([...text, 
              ['github'],
              ['\u00A0\u00A0']
            ])
            newTab('https://github.com/JohnArochaDev')
            setDownload(null)
            return true

          case 'linkedin':
            setText([...text, 
              ['linkedin'],
              ['\u00A0\u00A0'],
              ['I bet you wanna hire me after seeing that. Try cmd \'email\' to get in touch ;]']
            ])
            newTab('https://www.linkedin.com/in/johnarocha/')
            setDownload(null)
            return true
          
          // case 'cp phone':
          //   addToClipbboard('(713) 550-4133')
          //   setText([...text,
          //     ['phone number copied']
          //   ])
          //   setDownload(null)
          //   return true

          // case 'cp email':
          //   addToClipbboard('jparocha777@gmail.com')
          //   setText([...text,
          //     ['email copied']
          //   ])
          //   setDownload(null)
          //   return true
          
            case 'clear':
            setCompletedTexts(['If you feel lost type: help'])
            setText(['If you feel lost type: help'])
            setCurrentText('')
            setArrayIndex(1)
            setStringIndex(0)
            setCharIndex(0)
            setUrl('https://gifer.com/embed/fzNE')
            setIframe(null)
            setDownload(null)
            return true

          default:
            return false;

        }
      });
      return false
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
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [value, text, setText, setUserInput, userInput]);

  return (
    <p className="input">➜ <input id='input' ref={inputRef} onChange={handleChange} className="inputBack" type="text" autoFocus={true} value={userInput} /></p>
  )
}