import './Input.css'

export default function Input() {
  // This prevents mouse clicking!!
  document.onmousedown = (e) => {
    e.preventDefault();
  }
  //Remove above code inf necessary in the future
  return (
    <input type="text" autoFocus={true} />
  )
}