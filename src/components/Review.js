import React, { useEffect } from 'react';
import Download from '../svg/download';

const Review = ({
  source,
  image,
  small,
  title,
  date,
  text,
  author,
  pdf,
  url
}) => {

  
  useEffect(() => {
  }, [])

  return (
    <div className="review">
      <div className="review-inner">
        <div className="review-brand">
         { small && <h2 className="review-source">{small}</h2>}
         {image && <img className="review-logo" src={image} alt="logo"/>}
        </div>
        <div className="review-info">
          <h2 className="review-magazine">{source}</h2>
          {url &&  <a href={url} target="_blank" rel="noopener noreferrer" className="review-url">Visit website</a>}
          <p className="review-date">{date}</p>
          <h3 className="review-title">{title}</h3>
          <div className="review-text entry">
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
          {pdf && <a target="_blank" href={pdf} rel="noopener noreferrer" className="review-pdf">PDF <Download /></a>}
        </div>
      </div>
    </div>
  )
}

export default Review;
