import React from 'react';
// import ContainerNews from './components/ContainerNews';
import ContainerNews from './containers/ContainerNews';
import Navigation from './containers/Navigation';
import Settings from './containers/Settings';
import Calendar from './components/Calendar';
import ErrorNewsAPI from './containers/ErrorNewsAPI';

import validateNewsData from './utils/validateNewsData';
// import { articles, articlesIsraeel } from './test-news-data';
console.log(':focus ???');
console.log('margin-bottom news small devices');
console.log(`button clear in Calendar?`);
console.log(`Suspense dynamic import component`);

class App extends React.Component{

  render() {

    return (
      <>
        <Navigation />
        <Settings />
        <ContainerNews />
        <ErrorNewsAPI />
        {/*<ContainerNews listNews={validateNewsData(articles)}/>*/}
      </>
    );
  }
}

export default App;