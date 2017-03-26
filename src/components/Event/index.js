import React from 'react';
import moment from 'moment';
import './styles.css';

export default (props) => {
  const { event } = props;

  return (
    <div className="event">
      <h1 className="event-name">{event.name.split('-')[0]}</h1>
      <p className="event-details">{moment(event.time).format('llll')} – {event.yes_rsvp_count} javascripters {typeof(event.rating) !== 'undefined' ? ` – ${Math.round(event.rating.average)} star${Math.round(event.rating.average) == 1 ? '' : 's'} (${event.rating.count} review${event.rating.count == 1 ? '' : 's'})`: ''}</p>
      <div 
        dangerouslySetInnerHTML={{ __html: event.description }}
        className="description"/>
    </div>
  );
}