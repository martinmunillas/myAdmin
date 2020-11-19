import React from 'react';
import Box from '../components/atoms/Box';
import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import CreateProjectForm from '../components/organisms/CreateProjectForm/CreateProjectForm';

const CreateProject = () => {
  return (
    <MainLayout>
      <Title>Create new project</Title>

      <Box
        color='red'
        type='secondary'
        padding='m'
        direction='column'
        align='ss'
        rounded='xl'
        marginTop='40'
      >
        <CreateProjectForm />
      </Box>
    </MainLayout>
  );
};

export default CreateProject;
