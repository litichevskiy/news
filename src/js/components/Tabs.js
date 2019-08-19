import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DEFAULT_TRANSITION_TIME } from '../config';
import getParentNode from '../utils/getParentNode';
import TabContent from './TabContent';

class Tabs extends React.Component{

  state = {
    activeTab: this.props.activeTab,
    // name: this.props.children[this.props.activeTab]
    isActive:true,
  }

  changeActiveTab = ( event ) => {
    const target = getParentNode( event.target, 'li' );
    const index = +target.getAttribute('data-index');
    if( index === this.state.activeTab ) return;

    this.props.changeActiveTab( index );
    this.setState({ activeTab: index });
  }

  render() {
    const { children } = this.props;
    const { activeTab, isActive } = this.state;
    return(
      <>
        <ul className='tabsList'>
          {React.Children.map(children, ( child, index ) =>
            React.cloneElement (child, {
              onClick: this.changeActiveTab,
              isActive: index === activeTab,
              index: index
            })
          )}
        </ul>
        <TabContent
          name={''}
          content={children[activeTab].props.children} />
      </>
    )
  }
};

Tabs.defaultProps = {
  activeTab: 0,
};

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;