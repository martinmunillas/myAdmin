import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loginRequest } from '../../../redux/actions';

import Button from '../../atoms/Button';
import Input from '../../molecules/Input/Input';

import './SignInForm.scss';

const SignInForm = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form, '/');
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
        <Input inputType='password' title='Password' name='password' onChange={handleChange} />
        <Button color='blue'>Sign-In</Button>
      </form>
    </>
  );
};

const mapDispatch = {
  loginRequest,
};

export default connect(null, mapDispatch)(SignInForm);
