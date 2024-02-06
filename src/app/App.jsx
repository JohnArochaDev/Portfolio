import photo from '../photos/terminal top crop.png'
import './App.css';
import Terminal from '../components/Terminal/Terminal'

export default function App() {
  return (
    <div className="App">
      <img className='frame' src={photo} alt='' />
      <Terminal />
    </div>
  );
};
