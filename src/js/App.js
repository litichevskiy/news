import React from 'react';
import NewsList from './components/NewsList';
import Navigation from './containers/Navigation';
import Settings from './containers/Settings';

import { articles, articlesIsraeel } from './test-news-data';
console.log('LazyLoad::Initialized, tab animation');

class App extends React.Component{
  render() {
    return (
      <>
        <Navigation />
        <Settings />
        <NewsList newsList={articles}/>
      </>
    );
  }
}

export default App;