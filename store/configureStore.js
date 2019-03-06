import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { Iterable } from 'immutable';
//import { createLogger } from 'redux-logger';
//import _ from 'lodash';
import AppReducer from '../reducers';

const composeEnhancers = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(AppReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
  return store;
}