import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ className, message }) => (
  <div className={className}>{message}</div>
);

ErrorMessage.defaultProps = {
  className: 'error',
};

ErrorMessage.propTypes = {
  message: PropTypes.node.isRequired,
};

export default ErrorMessage;