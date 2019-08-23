import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initStore from './store';
import storageAPI from './storageAPI';
import App from './App';

initStore()
.then( store => {
  store.subscribe(() => {
    storageAPI.updateStorage({ userSettings: store.getState().userSettings });
  });

  // import createListNews from './test.js';

  render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.querySelector('.app')
  );
});