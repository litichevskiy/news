import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DEFAULT_TRANSITION_TIME } from '../config';
import { IconCLose, IconNewsPaper, IconLocation, IconSettings } from './icons';
import PublisherList from './PublisherList';
import CountriesList from './CountriesList';
import Button from './Button';
import Tabs from './Tabs';
import Tab from './Tab';

class Settings extends React.Component{

  closeSettings = () => {
    this.props.setVisibilitySettings( false );
  }

  render() {
    const { visibilitySettings } = this.props;
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
            <Tabs activeTab={1}>
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
            </Tabs>
          </section>
      </CSSTransition>
    )
  }
};

export default Settings;

Settings.defaultProps = {};
Settings.propTypes = {};