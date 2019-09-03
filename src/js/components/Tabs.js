import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getParentNode from '../utils/getParentNode';
import TabContent from './TabContent';

class Tabs extends React.Component{

  state = {
    activeTab: this.props.activeTab,
  }

  changeActiveTab = ({ target }) => {
    const tab = getParentNode( target, 'li' );
    const index = +tab.getAttribute('data-index');

    if( index === this.state.activeTab ) return;

    this.props.changeActiveTab( index );
    this.setState({ activeTab: index});
  }

  render() {
    const { children, btnClose } = this.props;
    const { activeTab } = this.state;

    return(
      <>
        <header className='settingsHeader'>
          <ul className='tabsList'>
            {React.Children.map(children, ( child, index ) =>
              React.cloneElement (child, {
                onClick: this.changeActiveTab,
                isActive: index === activeTab,
                index: index
              })
            )}
          </ul>
          {btnClose}
        </header>
        <TabContent content={children[activeTab].props.children} />
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