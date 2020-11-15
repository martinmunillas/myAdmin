import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../../redux/actions';

import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

import './SignInForm.scss';

const SignInForm = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(form, '/');
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className='signInForm' onSubmit={handleSubmit}>
        <Input title='Email' name='email' onChange={handleChange} />
        <Input type='password' title='Password' name='password' onChange={handleChange} />
        <Button color='blue'>Sign-In</Button>
      </form>
      <Button level='tertiary' color='white' type='submit'>
        Ask for permission!
      </Button>
    </>
  );
};

const mapDispatch = {
  login,
};

export default connect(null, mapDispatch)(SignInForm);
