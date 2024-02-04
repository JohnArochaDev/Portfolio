import './Input.css'

export default function Input() {
  // This prevents mouse clicking!!
  document.onmousedown = (e) => {
    e.preventDefault();
  }
  //Remove above code inf necessary in the future
  return (
    <p className="input">➜ <input className="inputBack" type="text" autoFocus={true} /></p>
  )
}