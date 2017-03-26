import React from 'react';
import './Event.css';

export default class Event extends React.Component {
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="event-name">{event.name.split('-')[0]}</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: event.description }}
          className="description"/>
      </div>
    );
  }
}