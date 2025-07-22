import { useEffect, useState } from 'react';
import './App.css';
import photo from '../photos/terminal top crop.png'
import Terminal from '../components/Terminal/Terminal'
import WindowsXP from '../components/Terminal/WindowsXP/WindowsXP';
import safePass from '../videos/safePass.mp4';

export default function App() {
  const [url, setUrl] = useState('https://gifer.com/embed/fzNE'); //this is the default url to hide the blank space
  const [iFrame, setIframe] = useState(null) //this allows the iframe to be set from the terminal
  const [focus, setFocus] = useState(true) // this is to focus the input in the terminal

  useEffect(() => {
    document.getElementById('input').focus() //creates focus on the input whenever the terminal is clicked
  }, [focus])

  return (
    <div className="App">
      <img className='frame' src={photo} alt='' />
      <Terminal
      focus={focus}
      setFocus={setFocus}
      setIframe={setIframe}
      iFrame={iFrame}
      url={url}
      setUrl={setUrl}
      />
      <WindowsXP
      videoType={true}
      video={safePass}
      setUrl={setUrl}
      url={url}
      iFrame={iFrame}
      setIframe={setIframe}
      />
    </div>
  );
};
