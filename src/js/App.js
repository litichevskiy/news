import React from 'react';
import NewsList from './components/NewsList';
import Navigation from './containers/Navigation';
import Settings from './containers/Settings';

import validateNewsData from './utils/validateNewsData';
import { articles, articlesIsraeel } from './test-news-data';
console.log('LazyLoad::Initialized, tab animation');

class App extends React.Component{
  render() {
    return (
      <>
        <Navigation />
        <Settings />
        {<NewsList newsList={validateNewsData(articles)}/>}
      </>
    );
  }
}

export default App;