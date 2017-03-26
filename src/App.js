import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from 'react-loading';
import Event from './Event';
import * as eventActionCreators from './actions/events';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.eventActions.fetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">The Montevideo Javascript Meetup Group</h1>
        </div>
        <div className="events">
          {events.loading &&
            <Loading type="balls"/>
          }
          {events.data && 
            events.data.map((status, i) => (
              <div className="status" key={i}>
                <h2>{status.title}</h2>
                {status.events.map((event, i) =>
                  <Event
                    event={event}
                    past={status.title === 'Past'}
                    key={i}
                  />)}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    eventActions: bindActionCreators(eventActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
