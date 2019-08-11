import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, isActive, onClick, index, className, name }) => {
  return(
    <li
      className={`${className} ${!isActive ? '' : 'active'}`}
      data-index={index}
      data-name={name}
      onClick={onClick}>
        {title}
    </li>
  )
};

Tab.defaultProps = {
  title: '',
  isActive: false,
  onClick: () => {},
  index: 0,
  name: '',
};

Tab.propTypes = {
  title: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tab;