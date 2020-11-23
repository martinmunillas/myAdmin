import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { setError, unsetError } from '../../../redux/actions';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Title from '../../atoms/Title';

import './ErrorMessage.scss';

const ErrorMessage = (props) => {
  const handleContinue = (e) => {
    props.unsetError();
  };

  if (!props.error) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='errorMessage'>
      <div className='errorMessage__box'>
        <button className='closeButton' onClick={handleContinue}>
          X
        </button>
        <div className='errorMessage__box--top'>
          <Title>Error {props.error.status}</Title>
        </div>
        <div className='errorMessage__box--bottom'>
          <Text color='black'>{props.error.message}</Text>
          <Button color='red' onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('errors')
  );
};

const mapState = (state) => ({
  error: state.error,
});

const mapDispatch = {
  setError,
  unsetError,
};

export default connect(mapState, mapDispatch)(ErrorMessage);
