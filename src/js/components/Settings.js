import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DEFAULT_TRANSITION_TIME, NEWS_CATEGORY } from '../config';
import { IconClose, IconNewsPaper, IconLocation, IconSettings, IconSearch } from './icons';
import Button from './Button';
import Tabs from './Tabs';
import Tab from './Tab';
// import SearchByKeywords from './SearchByKeywords';
import SearchByKeywords from '../containers/SearchByKeywords';
// import NewsByPublishers from './NewsByPublishers';
import NewsByPublishers from '../containers/NewsByPublishers';

// import NewsByCountries from './NewsByCountries';
import NewsByCountries from '../containers/NewsByCountries';
import publishers from './../publishers';
import countries from './../countries';
import UserSettings from '../containers/UserSettings';

const ESC = 27;// key code

class Settings extends React.Component{

  state = {activeTab: this.props.activeTabIndex};

  componentDidMount() {
    window.addEventListener('keyup', this.isClose );
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.isClose );
  }

  isClose = ({ keyCode }) => {
    if( keyCode === ESC ) this.closeSettings();
  }

  closeSettings = () => {
    this.props.setVisibilitySettings( false );
  }

  changeActiveTab = ( index ) => {
    this.setState({ activeTab: index })
    this.props.setActiveTabIndex( index );
  }

  render() {
    const { visibilitySettings } = this.props;
    const {activeTab } = this.state;
    return (
      <CSSTransition
        in={visibilitySettings}
        timeout={DEFAULT_TRANSITION_TIME}
        unmountOnExit
        mountOnEnter
        classNames='settings-animation'>
          <section className='settings'>
            <Button
              onClick={this.closeSettings}
              title='close settings'
              className='btn close'>
              <IconClose className='icon-close' />
            </Button>
            <Tabs
              activeTab={activeTab}
              changeActiveTab={this.changeActiveTab}>
              <Tab
                className={'tab'}
                name='settings'
                title={
                  <button className='btn' title='user settings'>
                    <IconSettings className='icon-settings'/>
                  </button>
                }>
                <h4 className='tabDescription'>settings</h4>
                <UserSettings />
              </Tab>
              <Tab
                className={'tab'}
                name='countries'
                title={
                  <button className='btn' title='news by countries'>
                    <IconLocation className='icon-location'/>
                  </button>
                }>
                <h4 className='tabDescription'>by countries</h4>
                <NewsByCountries countries={countries} categories={NEWS_CATEGORY}/>
              </Tab>
              <Tab
                className={'tab'}
                name='publishers'
                title={
                  <button className='btn' title='news by publishers'>
                    <IconNewsPaper className='icon-newspaper'/>
                  </button>
                }>
                <h4 className='tabDescription'>by publishers</h4>
                <NewsByPublishers publishers={publishers} />
              </Tab>
              <Tab
                className={'tab'}
                name='search by words'
                title={
                  <button className='btn' title='news by keywords'>
                    <IconSearch className='icon-search'/>
                  </button>
                }>
                <h4 className='tabDescription'>by keywords</h4>
                <SearchByKeywords />
              </Tab>
            </Tabs>
          </section>
      </CSSTransition>
    )
  }
};

export default Settings;

Settings.defaultProps = {};
Settings.propTypes = {};