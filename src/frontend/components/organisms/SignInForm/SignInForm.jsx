import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

import './SignInForm.scss';

const SignInForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
        <Input title='Username' name='username' onChange={handleChange} />
        <Input type='password' title='Password' name='password' onChange={handleChange} />
        <Button color='blue'>Sign-In</Button>
      </form>
      <Link to='/'>
        <Button level='tertiary' color='white' onChange={(e) => e.preventDefault()}>
          Ask for permission!
        </Button>
      </Link>
    </>
  );
};

export default SignInForm;
