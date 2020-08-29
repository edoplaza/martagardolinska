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
  const [pastEvents, setPastEvents] = useState([]);
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEventsTotal, setPastEventsTotal] = useState([]);
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

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10)  mm='0'+mm;
    let now = parseInt(yyyy+''+mm+''+dd);

    const future = result.data.filter(f => parseInt(f.acf.date_event) >= now );
    const past = result.data.filter(p => parseInt(p.acf.date_event) < now );
    
    setFutureEvents(future);
    setPastEventsTotal(past);
    const pastSliced = past.slice(0, size)
    setPastEvents([...pastSliced]);
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
      pastEvents,
      futureEvents,
      pastEventsTotal,
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
