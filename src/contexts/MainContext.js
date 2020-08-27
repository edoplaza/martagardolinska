import React, { createContext, useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export const MainContext = createContext();

const MainContextProvider = props => {

  const [announcements, setAnnouncements] = useState([]);
  const [social, setSocial] = useState({});
  const [contact, setContact] = useState({});
  const [biography, setBiography] = useState({});
  const [videos, setVideos] = useState([]);
  const [pressTotal, setPressTotal] = useState([]);
  const [press, setPress] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventsTotal, setEventsTotal] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {

  }, [isMenuOpen]);

  let url = 'https://martagardolinska.com/wpsite';

   const getAnnouncements = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/announcements`);
    let ans = result.data.acf.announcements;
    setAnnouncements([...ans]);
  }

  const getSocial = async () => {
    const result = await axios.get(`${url}/wp-json/acf/v3/options/social`)
    setSocial({...result.data.acf});
  }

  const getContact = async () => {
    const result = await axios.get(`${url}/wp-json/acf/v3/options/contact`)
    setContact({...result.data.acf});
  }

   const getBiography = async () => {
    const result = await axios.get(`${url}/wp-json/acf/v3/options/biography`)
    setBiography({...result.data.acf});
  }

  const getVideos = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/videos`);
    let vids = result.data.acf.video_list;
    setVideos([...vids]);
  }

  const getPress = async (size) => {
    const result = await axios(`${url}/wp-json/wp/v2/reviews`);
    const rev = result.data;
    setPressTotal(rev);
    var items = rev.slice(0, size)
    setPress([...items]);
  }

  const getEvents = async (size) => {
    const result = await axios(`${url}/wp-json/wp/v2/events`);
    const ev = result.data;
    setEventsTotal(ev);
    const items = ev.slice(0, size)
    setEvents([...items]);
  }

  const getPhotos = async () => {
    const result = await axios(`${url}/wp-json/acf/v3/options/photos`);
    const pho = result.data.acf.photo_gallery;
    const photo_urls = pho.map(photo => {
      return (
        {
          src: photo.url,
          width: photo.sizes['2048x2048-width'],
          height: photo.sizes['2048x2048-height']
        }
      )
    })
    setPhotos([...photo_urls]);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <MainContext.Provider value={{
      announcements,
      getAnnouncements,
      contact,
      getContact,
      biography,
      getBiography,
      social,
      getSocial,
      videos,
      getPress,
      press,
      pressTotal,
      getPhotos,
      photos,
      getVideos,
      events,
      eventsTotal,
      getEvents,
      isMenuOpen,
      toggleMenu,
      closeMenu
    }}>
      { props.children }
    </MainContext.Provider>
  )
}

export default withRouter(MainContextProvider);
