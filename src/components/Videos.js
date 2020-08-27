import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';
import Video from './Video';

let tl = gsap.timeline();

const Videos = () => {
  const { closeMenu, videos, getVideos } = useContext(MainContext);

  useEffect(() => {
    getVideos();
    closeMenu();
    tl.to('.videos', {
      duration: 1,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  return (
    <div className="page videos">
      <div className="page-header container">
        <h1 className="title">Videos</h1>
      </div>
      <div className="videos-content">
        <div className="video-list container">
        {
          videos.map(video => <Video
            url = {video.video_url}
            title={video.video_title}
            key={video.video_url}
          />)
        }
        </div>
      </div>
    </div>
  )
}

export default Videos;
