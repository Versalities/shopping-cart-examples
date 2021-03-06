import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'mobx-react'

import store from './MobX/Stores/productsStore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
