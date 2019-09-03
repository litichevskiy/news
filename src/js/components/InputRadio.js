import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ labelClass, inputClass, name, value, onChange, checked, content, title }) => (
  <label
    className={labelClass}
    title={title ? title : null}>
    <input
      className={inputClass}
      type='radio'
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}/>
    <span className='inputCheckbox radio'></span>
    {content}
  </label>
);

InputRadio.defaultProps = {
  inputClass: 'inputRadio',
  labelClass: 'containerInputRadio',
  name: '',
  value: '',
  title: null,
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default InputRadio;