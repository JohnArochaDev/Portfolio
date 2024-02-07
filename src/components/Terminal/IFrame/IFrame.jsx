import './IFrame.css';

export default function IFrame({ url }) {
  return (
    <>
      <iframe
        title="John Arocha's Portfolio"
        src='https://weatherapp-ga.fly.dev/'
        className='iframe'
      ></iframe>
    </>
  );
}