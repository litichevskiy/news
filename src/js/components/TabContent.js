import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ content, name }) => (
  <div className={`tabContent ${name}`}>
    {content}
  </div>
);

TabContent.defaultProps = {
  content: '',
  name: '',
};

TabContent.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default TabContent;