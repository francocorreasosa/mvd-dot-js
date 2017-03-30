import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import initial from './initialState';
import reducers from '../reducers';

const isProduction = process.env.NODE_ENV === 'production';

let middleware = [
  promiseMiddleware(),
  thunk
];

if (!isProduction) {
  middleware.push(createLogger());
}

const appliedMiddleware = applyMiddleware(...middleware);

export default createStore(reducers, initial, appliedMiddleware);