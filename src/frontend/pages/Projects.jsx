import { connect } from 'react-redux';
import React from 'react';
import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import ProjectCard from '../components/organisms/ProjectCard/ProjectCard';

const Projects = ({ projects }) => {
  return (
    <MainLayout>
      <Title>Projects</Title>
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
