import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initStore from './store';
import storageAPI from './storageAPI';
import App from './containers/App';
import { DEFAULT_NEWS_REQUEST } from './config';
import { getNews } from './actions/newsFetch';

initStore()
.then( store => {
  const { lastQueryForNews } = store.getState().userSettings;
  store.dispatch( getNews( lastQueryForNews || DEFAULT_NEWS_REQUEST ) );

  store.subscribe(() => {
    storageAPI.updateStorage({ userSettings: store.getState().userSettings });
  });

  render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.querySelector('.app')
  );
});