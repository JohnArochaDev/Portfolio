import './WindowsXP.css';
import photo from '../../../photos/windowsXPBrowserLucent.png';
import IFrame from "../IFrame/IFrame";

export default function WindowsXP({ iFrame, setUrl, url}) {
  return (
    <div className='windowsXP' style={iFrame? {} : {display:'none'}}> 
      <img className='window' src={photo} alt="" />
       <IFrame url={url} />
    </div>
  );
}