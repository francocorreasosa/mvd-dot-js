import expect from 'expect';
import events from './events';
import * as constants from '../constants';
import initialState from '../store/initialState';

it('returns the initial state if no action is passed', () => {
  expect(events(undefined, {})).toEqual(initialState.events);
});

it('returns loading state when FETCH_EVENTS_PENDING', () => {
  expect(events(undefined, {
    type: constants.FETCH_EVENTS_PENDING
  })).toEqual({
    ...initialState.events,
    loading: true,
    error: null
  });
});

it('returns error state when FETCH_EVENTS_REJECTED', () => {
  const error = { 
    code: 500,
    message: "Server error"
  };

  expect(events(undefined, {
    type: constants.FETCH_EVENTS_REJECTED,
    payload: error
  })).toEqual({
    ...initialState.events,
    error: error,
    loading: false
  });
});

it('returns data state when FETCH_EVENTS_FULFILLED', () => {
  const response = [
    { data: [ { name: "Event 1" } ] },
    { data: [ { name: "Event 2" }, { name: "Event 3" } ] }
  ];

  const stateData = [
    {
      events: [ { name: "Event 1" } ],
      title: "Upcoming"
    },
    {
      events: [ { name: "Event 3" }, { name: "Event 2" } ],
      title: "Past"
    }
  ]

  expect(events(undefined, {
    type: constants.FETCH_EVENTS_FULFILLED,
    payload: response
  })).toEqual({
    ...initialState.events,
    data: stateData,
    loading: false,
    error: null
  });
});