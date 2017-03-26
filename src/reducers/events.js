import initial from '../store/initialState';
import * as constants from '../constants';

export default function events(state = initial.events, action) {
  switch (action.type) {
    case constants.FETCH_EVENTS_PENDING:
      return { ...state, loading: true, error: null };
    case constants.FETCH_EVENTS_FULFILLED: {
      const events = action.payload.map((response, i) => ({
        events: response.data,
        title: i === 0 ? 'Upcoming' : 'Past'
      }));
      return { ...state, loading: false, data: events};
    }
    case constants.FETCH_EVENTS_REJECTED:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}