import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import App from './containers/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(reducers, initialState, composeEnhancers(
	applyMiddleware(ReduxPromise, thunkMiddleware)
));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.container'));
