import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//setup redux
import store from './configStore.js'
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import { history } from './util/history';

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
