import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/college anthem.mp4'

const Videoplayer = ({playVideo ,setPlayVideo}) => {
 
  const player = useRef(null);

  const closePlayer = (e)=>{
       if(e.target===player.current){
        setPlayVideo(false);
       }
  }
  return (
    <div className={`video-player ${playVideo?'':'hide'}`} ref={player}
    onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
