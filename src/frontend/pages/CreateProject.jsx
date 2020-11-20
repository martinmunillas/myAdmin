import React, { useState } from 'react';

import { createProjectRequest } from '../redux/actions';

import Box from '../components/atoms/Box';
import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import CreateProjectForm from '../components/organisms/CreateProjectForm/CreateProjectForm';
import { connect } from 'react-redux';

const CreateProject = (props) => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.split(',').map((string) => string.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProjectRequest(form);
  };
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
        <CreateProjectForm
          eventHandlers={{ handleArrayChange, handleChange, handleSubmit }}
          formValues={form}
        />
      </Box>
    </MainLayout>
  );
};

const mapDispatch = {
  createProjectRequest,
};

export default connect(null, mapDispatch)(CreateProject);
