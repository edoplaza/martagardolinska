import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';
import Event from './Event';

let tl = gsap.timeline();

const Calendar = () => {
  const [size, setSize] = useState(0);
  const {  getEvents, events, eventsTotal, closeMenu } = useContext(MainContext);

  useEffect(() => {
    
    getEvents(1)
    setSize(1);
    closeMenu();
    tl.to('.calendar', {
      duration: 1,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  const getMore = () => {
    getEvents(size + 1);
    setSize(size + 1);
  }

  return (
    <div className="page calendar">
      <div className="page-header container">
        <h1 className="title">Calendar</h1>
      </div>
      <div className="event-list container">
        {
          events.map(event => {
            const {
              date_event,
              location_name_event,
              orchestra_event,
              soloists_event,
              text_event,
              time_event,
              title_event
            } = event.acf

            return (
              <Event
                key={date_event+title_event}
                title={title_event}
                orchestra={orchestra_event}
                soloists={soloists_event}
                date={date_event}
                text={text_event}
                location={location_name_event}
                time={time_event}
              />
            )
          })
        }
      </div>
      { eventsTotal.length > events.length &&  <div className="more container"><button onClick={getMore}>Load More</button></div> }
    </div>
  )
}

export default Calendar;
