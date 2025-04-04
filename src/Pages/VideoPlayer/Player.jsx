import React, { useEffect, useState } from 'react'
import Videoplayer from './Videoplayer';
import s from './player.module.css'
import { useParams } from 'react-router-dom';
import { getSingleMetaData } from "../../services/operation/video"
const Player = () => {

  const { videoID } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [videoData, setVideoData] = useState();

  // useEffect(() => {
  //   //Find Video By Id and it;s Url;
  //   getSingleMetaData(videoID, setLoading, setVideoData);
  // }, [videoID]);

  const videoUrl = "https://d34s66slw1xuws.cloudfront.net/Production/"
  return (
    <div className={s.conatiner}>
          <Videoplayer videoUrl={videoUrl} />
    </div>
  );
}

export default Player
