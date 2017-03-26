import React from 'react';
import moment from 'moment';
import './styles.css';

export default class Event extends React.Component {
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="event-name">{event.name.split('-')[0]}</h2>
        <p>{moment(1354829400000).format('llll')} – {event.yes_rsvp_count} javascripters {typeof(event.rating) !== 'undefined' ? ` – ${Math.round(event.rating.average)} star${Math.round(event.rating.average) == 1 ? '' : 's'} (${event.rating.count} review${event.rating.count == 1 ? '' : 's'})`: ''}</p>
        <div 
          dangerouslySetInnerHTML={{ __html: event.description }}
          className="description"/>
      </div>
    );
  }
}