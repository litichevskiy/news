import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initStore from './store';
import storageAPI from './storageAPI';
import App from './App';

import { getNews } from './actions/index';

initStore()
.then( store => {
  // const userSettings = store.getState().userSettings;
  // if( !userSettings.lastQueryForNews ) {
  //   store.dispatch( getNews() );
  // }

  store.subscribe(() => {
    storageAPI.updateStorage({ userSettings: store.getState().userSettings });
    // console.log( store.getState() )
  });

  // import createListNews from './test.js';

  render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.querySelector('.app')
  );
});