import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import initial from './initialState';
import reducers from '../reducers';

const middleware = applyMiddleware(
  createLogger(),
  promiseMiddleware(),
  thunk
);

export default createStore(reducers, initial, middleware);