import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActionCreators from './actions/events';
import Event from './Event';
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
          <p>This site is still in development :)</p>
        </div>
        <div className="events">
          {events.data && 
            events.data.map((status) => (
              <div className="status">
                <h2>{status.title}</h2>
                {status.events.map((event) => <Event event={event} />)}
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
