import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import { createStore } from 'redux';

import App from './containers/Game';
import './index.css';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
