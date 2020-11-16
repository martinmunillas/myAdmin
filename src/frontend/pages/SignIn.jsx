import React from 'react';

import SignInForm from '../components/organisms/SignInForm/SignInForm';
import Title from '../components/atoms/Title';
import Box from '../components/atoms/Box';
import SpacedLayout from '../components/layouts/SpacedLayout/SpacedLayout';

const SignIn = () => {
  return (
    <>
      <SpacedLayout>
        <Box color='white' type='secondary' rounded='m'>
          <Title color='yellow'>Sign In!</Title>
          <SignInForm />
        </Box>
      </SpacedLayout>
    </>
  );
};

export default SignIn;
