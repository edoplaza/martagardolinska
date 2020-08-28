import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';

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
    manager_name,
    manager_link,
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
            <a className="contact-manager" href={manager_link} target="_blank">{manager_name}</a>
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
          <img src={contact_photo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact;
