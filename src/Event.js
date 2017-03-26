import React from 'react';

export default class Event extends React.Component {
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2>{event.name}</h2>
      </div>
    );
  }
}