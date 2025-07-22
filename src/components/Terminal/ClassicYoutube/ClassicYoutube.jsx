import './ClassicYoutube.css';
import Video from '../Video/Video';

export default function ClassicYoutube({ photo, video }) {
  return (
    <>
      <img className='classicYoutube' src={photo} alt="" />
      <Video video={video} />
    </>
  );
}