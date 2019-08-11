import React from 'react';
import PropTypes from 'prop-types';
import { IconSettings, IconLogo } from './icons';
import Button from './Button';

class Navigation extends React.Component{

  openSettings = () => {
    this.props.setVisibilitySettings( true );
  }

  render() {
    return(
      <header className='navigation'>
        <Button
          onClick={this.openSettings}
          className='btn'
          title='open settings'>
          <IconSettings className='icon-settings' />
        </Button>
        <a href='/' className='containerLogo' title='daily news'>
          <IconLogo className='icon-logo' />
          <span className='logo-text'>news</span>
        </a>
      </header>
    )
  }
};

Navigation.defaultProps = {
  // children: null,
};

Navigation.propTypes = {
  // news: PropTypes.node
};

export default Navigation;