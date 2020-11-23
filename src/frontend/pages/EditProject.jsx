import React, { useState } from 'react';

import { editProjectRequest } from '../redux/actions';

import Box from '../components/atoms/Box';
import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import ProjectForm from '../components/organisms/ProjectForm/ProjectForm';
import { connect } from 'react-redux';

const EditProject = (props) => {
  const project = props.projects.find((project) => project._id == props.match.params.id);

  const [form, setForm] = useState(project);
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
    props.editProjectRequest(form, project._id);
  };
  return (
    <MainLayout>
      <Title>Edit {project.name}</Title>

      <Box
        color='red'
        type='secondary'
        padding='m'
        direction='column'
        align='ss'
        rounded='xl'
        marginTop='40'
      >
        <ProjectForm
          eventHandlers={{ handleArrayChange, handleChange, handleSubmit }}
          formValues={form}
        />
      </Box>
    </MainLayout>
  );
};

const mapDispatch = {
  editProjectRequest,
};

const mapState = (state) => ({
  projects: state.projects,
});

export default connect(mapState, mapDispatch)(EditProject);
