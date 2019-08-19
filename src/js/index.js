import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initStore from './store';
import App from './App';

let isUpload;

initStore()
.then( store => {
  store.subscribe(() => {
    const { userSettings: {isUploadImages} } = store.getState();
    if( isUpload === undefined ) isUpload = isUploadImages;
    else
      if( isUpload !== isUploadImages ) setTimeout(() => window.lazyLoadInstance.update(), 400)
  });

  window.lazyLoadOptions = {
    elements_selector: ".lazy",
  };

  window.addEventListener('LazyLoad::Initialized', (event) => {
    window.lazyLoadInstance = event.detail.instance;
  });

  // import createListNews from './test.js';

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.app')
  );
});

// window.addEventListener('beforeunload', () => {});