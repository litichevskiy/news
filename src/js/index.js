import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initStore from './store';
import App from './App';

initStore()
.then( store => {
  store.subscribe(() => {
    console.log( store.getState() );
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
})