import './Video.css';
import { useRef } from 'react';

export default function Video({ video }) {
  const videoRef = useRef(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen().catch(err => {
        console.error('Failed to enter fullscreen:', err);
      });
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className='classicYoutube-video'
        controls
        src={video}
        type="video/mp4"
        allowFullScreen
      >
        Your browser does not support the video tag.
      </video>
      <button onClick={handleFullScreen}>Go Full Screen</button>
    </>
  );
}