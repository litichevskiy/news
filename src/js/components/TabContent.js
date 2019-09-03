import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ content }) => (
  <div className={`tabContent`}>
    {content}
  </div>
);

TabContent.propTypes = {
  content: PropTypes.node.isRequired,
};

export default TabContent;