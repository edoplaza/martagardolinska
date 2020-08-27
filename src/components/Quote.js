import React, { useEffect } from 'react';
import { MainContext } from '../contexts/MainContext';
import gsap from 'gsap';

let tl = gsap.timeline();

const Quote = ({highlight, text, meta}) => {

  useEffect(() => {
    tl.to('.quote', {
      duration: 1,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  return (
    <div className="quote">
      {highlight && <div className="quote-highlight" dangerouslySetInnerHTML={{ __html: highlight }}></div>}
      {text && <div className="quote-text" dangerouslySetInnerHTML={{ __html: text }}></div>}
      {meta && <div className="quote-footer" dangerouslySetInnerHTML={{ __html: meta}}></div>}
    </div>
  )
}

export default Quote;
