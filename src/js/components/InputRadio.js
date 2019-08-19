import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ labelClass, inputClass, name, value, onChange, checked }) => (
  <label className={labelClass} >
    <input
      className={inputClass}
      type='radio'
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}/>
    <span className='inputCheckbox radio'></span>
    <span>{value}</span>
  </label>
);

InputRadio.defaultProps = {
  inputClass: 'inputRadio',
  labelClass: 'containerInputRadio',
  name: '',
  value: '',
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default InputRadio;