import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DEFAULT_TRANSITION_TIME } from '../config';
import { IconCLose, IconNewsPaper, IconLocation, IconSettings, IconSearch } from './icons';
import PublisherList from './PublisherList';
import CountriesList from './CountriesList';
import Button from './Button';
import Tabs from './Tabs';
import Tab from './Tab';
import SearchByKeywords from './SearchByKeywords';

const ESC = 27;// key code

class Settings extends React.Component{

  state = {activeTab: 0};

  componentDidMount() {
    window.addEventListener('keyup', this.isClose );
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.isClose );
  }

  isClose = ( event ) => {
    if( event.keyCode === ESC ) this.closeSettings();
  }

  closeSettings = () => {
    this.props.setVisibilitySettings( false );
  }

  changeActiveTab = ( index ) => {
    this.state.activeTab = index
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
              <IconCLose className='icon-close' />
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
                <p className='tabDescription'>Settings</p>
              </Tab>
              <Tab
                className={'tab'}
                name='countries'
                title={
                  <button className='btn' title='news by countries'>
                    <IconLocation className='icon-location'/>
                  </button>
                }>
                <p className='tabDescription'>by Countries</p>
                <CountriesList />
              </Tab>
              <Tab
                className={'tab'}
                name='publishers'
                title={
                  <button className='btn' title='news by publishers'>
                    <IconNewsPaper className='icon-newspaper'/>
                  </button>
                }>
                <p className='tabDescription'>by Publishers</p>
                <PublisherList />
              </Tab>
              <Tab
                className={'tab'}
                name='search by words'
                title={
                  <button className='btn' title='news by keywords'>
                    <IconSearch className='icon-search'/>
                  </button>
                }>
                <p className='tabDescription'>by keywords</p>
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