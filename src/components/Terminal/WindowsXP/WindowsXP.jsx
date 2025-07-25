import './WindowsXP.css';
import xpWindow from '../../../photos/windowsXPBrowserLucent.png';
import ClassicYoutube from '../ClassicYoutube/ClassicYoutube';
import classicYoutube from '../../../photos/classicYoutubeTransparent.png'
import IFrame from "../IFrame/IFrame";

export default function WindowsXP({ iFrame, setIframe, setUrl, url, videoType, video, setVideo, setVideoType}) {

  function close() {
    setUrl('');
    setIframe(null);
    setVideoType(false)
    setVideo('')
  }

  return (
    videoType, video ? (
      <div className='windowsXP' style={iFrame? {} : {display:'none'}}> 
        <img className='window' src={xpWindow} alt="" />
        <button id='x' onClick={() => close()}>BUTTON BABY</button>
        <ClassicYoutube photo={classicYoutube} video={video} />
    </div>
    ) : (
    <div className='windowsXP' style={iFrame? {} : {display:'none'}}> 
      <img className='window' src={xpWindow} alt="" />
      <button id='x' onClick={() => close()}>BUTTON BABY</button>
      <IFrame url={url} />
    </div>
    )
  );
}