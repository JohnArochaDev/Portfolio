import './WindowsXP.css';
import photo from '../../../photos/windowsXPBrowserLucent.png';
import IFrame from "../IFrame/IFrame";

export default function WindowsXP() {
  return (
    <div className='windowsXP'>
      <img className='window' src={photo} alt="" />
      <IFrame url={'www.google.com'}/>
    </div>
  );
}