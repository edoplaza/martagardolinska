import React, { useEffect, useState } from 'react';
import Youtube from '../svg/youtube';

const Video = ({title, url}) => {

  const [link, setLink] = useState('')

  useEffect(() => {
    var regex = /<iframe.*?src=['"](.*?)['"]/;
    var src = regex.exec(url)[1];
    setLink(src);
  }, [])

  return (
    <div className="video">
      <div
        className='video-frame'
        dangerouslySetInnerHTML={{ __html: url }}>
      </div>
      <h2 className="video-title">{title}</h2>
      <a className="video-icon" rel="noopener noreferrer" target="_blank" href={link}><Youtube/> Watch on Youtube</a>
    </div>
  )
}

export default Video;
