import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import ProjectCard from '../components/organisms/ProjectCard/ProjectCard';
import Box from '../components/atoms/Box';
import Button from '../components/atoms/Button';

const Projects = ({ projects }) => {
  return (
    <MainLayout>
      <Box direction='row' padding='none' type='tertiary' align='ss'>
        <Title>Projects</Title>
        <Link to='/projects/create'>
          <Button color='red'>Create new project ➡</Button>
        </Link>
      </Box>
      <ul>
        {projects.map((project) => (
          <ProjectCard {...project} key={project._id} />
        ))}
      </ul>
    </MainLayout>
  );
};

const mapState = (state) => ({
  projects: state.projects,
});

export default connect(mapState, null)(Projects);
