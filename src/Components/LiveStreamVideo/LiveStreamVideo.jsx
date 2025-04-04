import React from 'react'
import s from './LiveStreamVideo.module.css'
import Player from '../../Pages/VideoPlayer/Player'
const LiveStreamVideo = () => {
  return (
    <div className={s.VideoConatiner}>
        {/* <Player /> */}
        Player
    </div>
  )
}

export default LiveStreamVideo