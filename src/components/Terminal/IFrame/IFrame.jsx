import './IFrame.css';


export default function IFrame({ url }) {


  return (
    <iframe
      id="frame"
      title="John Arocha's Portfolio"
      src={url}
      className='iframe'
    ></iframe>
  );
}