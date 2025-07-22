import './Video.css'

export default function Video({ video }) {
  return (
    <>
      <video
        className='classicYoutube-video'
        controls
        src={video}
        type="video/mp4"
        allowFullscreen
      >
        Your browser does not support the video tag.
      </video>
    </>
  )
}