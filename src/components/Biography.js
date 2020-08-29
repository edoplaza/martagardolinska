import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import gsap from 'gsap';
import tablet from '../img/biography-tablet.jpg';
import desktop from '../img/biography-desktop.jpg';

let tl = gsap.timeline();

const Biography = () => {
  const { getBiography, biography, closeMenu } = useContext(MainContext);
  const {
    biography_highlight,
    biography_highlight_polish,
    biography_text,
    biography_text_polish
  } = biography

  const [english, setEnglish] = useState(true);

  useEffect(() => {
    getBiography();
    closeMenu();
    tl.to('.biography-bg', {
      duration: 1,
      ease: 'ease-in-out',
      css: {
        opacity: 1,
        width: '105%',
        height: '105%'
      }}
    ).to('.biography-container', {
      duration: 0.8,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  return (
    <div className="biography">
      <picture className="biography-bg">
        <source srcSet={tablet} media="(max-width: 800px)" />
        <source srcSet={desktop} media="(min-width: 801px)" />
        <img src={tablet} alt="" />
      </picture>
      <div className="page-content">
        <div className="biography-container">
          {english && <h1 className="title">Biography</h1>}
          {!english && <h1 className="title">Biografia</h1>}
          <div className="biography-languages">
            <button onClick={() => setEnglish(true)}>English</button>
            <button onClick={() => setEnglish(false)}>Polski</button>
          </div>
          {english && <div className="biography-header" dangerouslySetInnerHTML={{ __html: biography_highlight }}></div>}
          {!english && <div className="biography-header" dangerouslySetInnerHTML={{ __html: biography_highlight_polish }}></div>}
          {english && <div className="entry biography-content" dangerouslySetInnerHTML={{ __html: biography_text }}></div>}
          {!english && <div className="entry biography-content" dangerouslySetInnerHTML={{ __html: biography_text_polish }}></div>}
        </div>
      </div>
    </div>
  )
}

export default Biography;
