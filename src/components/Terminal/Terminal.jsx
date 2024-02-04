import './Terminal.css';
import Input from './Input/Input'
import { ReactTyped } from "react-typed";
import { useEffect, useState, useRef } from "react";

export default function Terminal() {
  
  const [text, setText] = useState([
  ['Welcome'],
  ['Type in a command to get started'],
  ['If you feel lost type: help']
])

const textBoxMessage = useRef([])

const [textBox, setTextBox] = useState([])

//Create a function that iterates through the array of arrays, 

// var i = 0;
// var txt = 'Welcome'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     textBoxMessage.current = [...textBoxMessage.current, text[i]]
//     setTextBox(textBoxMessage.current)
//     console.log('txtbox',textBoxMessage.current)
//     console.log('txt i',text[i])
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// function typeWriter() {
//   for (let i = 0; i < text.length; i++) {
//     textBoxMessage.current.push([])
//     for (let j = 0; j < text[i].length; j++) {
//       setTimeout(() => {
//       for (let k = 0; k < text[i][j].length; k++) {
//           console.log('log', text[i][j])
//           textBoxMessage.current[i] += text[i][j][k]
//           setTextBox(textBoxMessage.current)
//         }
//       }, speed);
//     }
//   }
//   console.log(text)
//   console.log(textBoxMessage.current, text)
// }


function typeWriter() {
  for (let i = 0; i < text.length; i++) {
    textBoxMessage.current.push([])
    setTimeout(() => {
      for (let j = 0; j < text[i].length; j++) {
        setTimeout(() => {
          for (let k = 0; k < text[i][j].length; k++) {
            setTimeout(() => {
              console.log('log', text[i][j])
              textBoxMessage.current[i] += text[i][j][k]
              setTextBox(textBoxMessage.current)
            }, speed);
          }
        }, speed)
      }
    }, speed)
  }
  console.log(text)
  console.log(textBoxMessage.current, text)
}


useEffect(() => {
  typeWriter()
}, [])

//does a typescript on each one, and places it inside of the div with the ID of textBox

  return (
    <div className="terminal cristal">
      <p className="text" >
        My name is {" "}
        <ReactTyped strings={["John Arocha"]} typeSpeed={75} />
      </p>
      <div id='textBox'>
        {/* {textBox.map((arr) => (
          <div>{arr}</div>
        ))} */}
        {textBox}
      </div>
      <Input />
    </div>
  );
};
