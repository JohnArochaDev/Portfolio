import './WindowsXP.css';
import photo from '../../../photos/windowsXPBrowserLucent.png';
import IFrame from "../IFrame/IFrame";

export default function WindowsXP({ iFrame, setIframe, setUrl, url}) {

  function close() {
    setUrl('');
    setIframe(null);
  }

  return (
    <div className='windowsXP' style={iFrame? {} : {display:'none'}}> 
      <img className='window' src={photo} alt="" />
      <button id='x' onClick={() => close()}>BUTTON BABY</button>
      <IFrame url={url} />
    </div>
  );
}