import React from 'react';

import SignInForm from '../components/organisms/SignInForm/SignInForm';
import Title from '../components/atoms/Title/Title';
import Box from '../components/atoms/Box/Box';
import SpacedLayout from '../components/layouts/SpacedLayout/SpacedLayout';

const SignIn = () => {
  return (
    <>
      <SpacedLayout>
        <Box color='white'>
          <Title color='yellow'>Sign In!</Title>
          <SignInForm />
        </Box>
      </SpacedLayout>
    </>
  );
};

export default SignIn;
