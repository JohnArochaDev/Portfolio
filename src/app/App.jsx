import photo from '../photos/terminal top crop.png'
import './App.css';
import Terminal from '../components/Terminal/Terminal'
import WindowsXP from '../components/Terminal/WindowsXP/WindowsXP';

export default function App() {
  return (
    <div className="App">
      <img className='frame' src={photo} alt='' />
      <Terminal />
      <WindowsXP />
    </div>
  );
};
