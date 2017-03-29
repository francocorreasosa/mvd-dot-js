import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-spinkit';
import Event from './components/Event';
import Header from './components/Header';
import ProposeTalk from './components/ProposeTalk';
import * as eventActionCreators from './actions/events';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.eventActions.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        {events.loading ?
          <div className="spinner-container">
            <Spinner className="spinner" spinnerName="rotating-plane" noFadeIn />
            <p className="title spinner-text">Loading some awesome data...</p>
          </div>
        :
          <div>
            <Header/>
            <div className="App">
              <div className="events">
                {events.error &&
                  <div className="error">
                    <p>Oh snap! We had an unexpected error</p>
                  </div>
                }
                {events.data &&
                  events.data.map((status, i) => (
                    <div className="status" key={i}>
                      {status.events.length !== 0 &&
                        <h2 className="status-title">{status.title} meetups</h2>
                      }
                      {status.events.map((event, i) =>
                        <Event
                          event={event}
                          past={status.title === 'Past'}
                          key={i}
                        />)}
                      {status.events.length === 0 &&
                        <ProposeTalk />
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            <footer>Made by <a href="https://www.twitter.com/francorreasosa">@francorreasosa</a>. Take a look at the <a href="https://github.com/francocorreasosa/mvd-dot-js">source</a>.</footer>
          </div>
        }
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
