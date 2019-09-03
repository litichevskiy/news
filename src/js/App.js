import React from 'react';
import PropTypes from 'prop-types';
import ContainerNews from './containers/ContainerNews';
import Navigation from './containers/Navigation';
import Settings from './containers/Settings';
import ErrorNewsAPI from './containers/ErrorNewsAPI';

class App extends React.Component{

  render() {
    const { theme } = this.props;
    return (
      <div className={`theme theme-${theme}`}>
        <Settings />
        <Navigation />
        <ContainerNews />
        <ErrorNewsAPI />
      </div>
    );
  }
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default App;