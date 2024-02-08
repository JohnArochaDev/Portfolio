import { useState } from 'react';
import './App.css';
import photo from '../photos/terminal top crop.png'
import Terminal from '../components/Terminal/Terminal'
import WindowsXP from '../components/Terminal/WindowsXP/WindowsXP';

export default function App() {
  const [url, setUrl] = useState('https://gifer.com/embed/fzNE');
  const [iFrame, setIframe] = useState(null)

  return (
    <div className="App">
      <img className='frame' src={photo} alt='' />
      <Terminal
      setIframe={setIframe}
      iFrame={iFrame}
      url={url}
      setUrl={setUrl}
      />
      <WindowsXP 
      setUrl={setUrl}
      url={url}
      iFrame={iFrame}
      />
    </div>
  );
};
