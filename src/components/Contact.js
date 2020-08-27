import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';

import desktop from '../img/contact-desktop.jpg';

let tl = gsap.timeline();

const Contact = () => {
  const { getSocial, social, getContact, contact, closeMenu } = useContext(MainContext);

  const {
    instagram,
    instagram_link,
    facebook,
    facebook_link,
    twitter,
    twitter_link
  } = social

  const {
    contact_info,
    contact_photo
  } = contact

  useEffect(() => {
    getContact();
    getSocial();
    closeMenu();
    tl.to('.contact', {
      duration: 1,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  return (
    <div className="page contact">
      <div className="contact-inner">
        <div className="contact-left">
          <div className="page-header">
            <h1 className="title">Contact</h1>
          </div>
          <div className="contact-section">
            <h2 className="subtitle-big">General Management</h2>
            <div dangerouslySetInnerHTML={{ __html: contact_info }}></div>
          </div>
          <div className="page-header">
            <h1 className="title">Follow Me</h1>
          </div>
          <div className="contact-section">
            <h3 className="subtitle-small">Instagram</h3>
            <a href={instagram_link} className="text">{instagram}</a>
            <h3 className="subtitle-small">Facebook</h3>
            <a href={facebook_link} className="text">{facebook}</a>
            <h3 className="subtitle-small">Twitter</h3>
            <a href={twitter_link} className="text">{twitter}</a>
          </div>
        </div>
        <div className="contact-right">
          <img src={contact_photo} />
        </div>
      </div>
    </div>
  )
}

export default Contact;
