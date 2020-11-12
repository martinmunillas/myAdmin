import { connect } from 'react-redux';
import React from 'react';
import Title from '../components/atoms/Title/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Projects = ({ projects }) => {
  return (
    <MainLayout>
      <Title blue>Projects</Title>
      <ul>
        {projects.map((project) => (
          <li>{project.name}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

const mapState = (state) => ({
  projects: state.projects,
});

export default connect(mapState, null)(Projects);
