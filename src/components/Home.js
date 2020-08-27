import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';
import Quote from './Quote';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import mobile from '../img/home-mobile.jpg';
import tablet from '../img/home-tablet.jpg';
import desktop from '../img/home-desktop.jpg';

let tl = gsap.timeline();

const Home = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 6000,
    cssEase: "linear",
    arrows: false
  };

  const {
    announcements,
    getAnnouncements,
    getBiography,
    getSocial,
    getContact,
    contact,
    getVideos,
    getPress,
    getPhotos,
    getEvents,
    photos,
    closeMenu
  } = useContext(MainContext);

  const {
    contact_photo
  } = contact

  useEffect(() => {
    getAnnouncements();
    getContact();
    getSocial();
    getBiography();
    getVideos();
    getPress(1);
    getPhotos();
    getEvents(1);
    closeMenu();

    tl.to('.home-bg', {
      duration: 1,
      ease: 'ease-in-out',
      css: {
        opacity: 1,
        width: '105%',
        height: '105%'
      }}
    )
  }, [])

  return (
    <div className="home">
      <picture className="home-bg">
        <source srcSet={mobile} media="(max-width: 425px)" />
        <source srcSet={tablet} media="(min-width: 426px) and (max-width: 800px)" />
        <source srcSet={desktop} media="(min-width: 801px)" />
        <img src={mobile} alt="" />
      </picture>
      <div className="home-container">
        <div className="home-quotes">
          <Slider {...settings}>
            {
              announcements.map(announcement => {
                return (
                  <Quote
                    key = {announcement.text}
                    highlight = {announcement.highlight}
                    text = {announcement.text}
                    meta = {announcement.meta}
                   />
                )
              })
            }
          </Slider>
        </div>
      </div>
      <div className="hidden-load">
        <img src={contact_photo} alt=""></img>
        {photos.map(photo => <img key={photo.src} src={photo.src} alt=""></img>)}
      </div>
    </div>
  )
}

export default Home;
