import './IFrame.css';


export default function IFrame({ url }) {


  return (
    <>
      <iframe
        title="John Arocha's Portfolio"
        src={url}
        className='iframe'
      ></iframe>
    </>
  );
}