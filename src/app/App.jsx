import photo from '../photos/Terminal.png'
import './App.css';
import Terminal from '../components/Terminal/Terminal'
import { ReactTyped } from "react-typed";

export default function App() {
  return (
    <div className="App">
      <img className='frame' src={photo} alt='' />
      <Terminal />
    </div>
  );
};