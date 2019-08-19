import React from 'react';
// import NewsList from './components/NewsList';
import NewsList from './containers/NewsList';
import Navigation from './containers/Navigation';
import Settings from './containers/Settings';
import Calendar from './components/Calendar';

import validateNewsData from './utils/validateNewsData';
import { articles, articlesIsraeel } from './test-news-data';
console.log('lazyLoadInstance.update !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('LazyLoad::Initialized');
console.log(':focus ???');

class App extends React.Component{

  render() {

    return (
      <>
        <Navigation />
        <Settings />
        <NewsList newsList={validateNewsData(articles)}/>
      </>
    );
  }
}

export default App;