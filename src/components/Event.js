import React, { useEffect } from 'react';

const Event = ({title, orchestra, soloists, date, text, location, time }) => {
  useEffect(() => {
  }, [])

  const day = date.slice(-2);
  const month = date.slice(4,6);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthString = months[month - 1].toUpperCase();

  return (
    <div className="event">
      <div className="event-inner">
        <div className="event-date">
          <h2 className="event-day">{day}</h2>
          <span className="event-month">{monthString}</span>
        </div>
        <div className="event-info">
          <h2 className="event-title">{title}</h2>
          { orchestra && <h3 className="event-orchestra">{orchestra}</h3>}
          { soloists &&  <div className="event-soloists entry" dangerouslySetInnerHTML={{ __html: soloists }}></div> }

          <div
            className="event-program entry"
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </div>
          <h3 className="event-location">{location}</h3>
          <div className="event-time">{time}</div>
        </div>
      </div>
    </div>
  )
}

export default Event;
