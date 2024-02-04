import './Input.css'

export default function Input() {
  // This prevents mouse clicking!!
  document.onmousedown = (e) => {
    e.preventDefault();
  }
  //Remove above code inf necessary in the future

  //Add functionality with queryselector on the enter key that runs a function.

  // document.addEventListener('keydown', handleKeyDown, true);

  // document.removeEventListener('keydown', handleKeyDown);

  
  return (
    <p className="input">➜ <input className="inputBack" type="text" autoFocus={true} /></p>
  )
}