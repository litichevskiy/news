import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ content, name }) => (
  <section className={`tabContent ${name}`}>
    {content}
  </section>
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