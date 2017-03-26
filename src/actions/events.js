import * as constants from '../constants';
import axios from 'axios';
import meetup from '../meetup';

export function fetchEvents() {
  return {
    type: constants.FETCH_EVENTS,
    payload: {
      promise: Promise.all([
        axios.get(meetup.EVENTS_URL.UPCOMING),
        axios.get(meetup.EVENTS_URL.PAST)
      ])
    }
  };
}