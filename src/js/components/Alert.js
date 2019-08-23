import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DEFAULT_TRANSITION_TIME } from '../config';
import { IconClose } from './icons';
import Button from './Button';


const Alert = ({ message, closeMessage, isShow }) => (
  <CSSTransition
    in={isShow}
    timeout={DEFAULT_TRANSITION_TIME}
    mountOnEnter
    unmountOnExit
    classNames='alert-animation'>
      <div className='alert'>
        <div>{message}</div>
        <div className='containerButtotn'>
          <Button
            className='btn closeMessage'
            onClick={closeMessage}>
            <IconClose className='icon-close' />
          </Button>
        </div>
      </div>
  </CSSTransition>
);

Alert.DefaultProps = {};
Alert.propType = {
  // message: PropTypes
  closeMessage: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default Alert;