import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteProjectRequest } from '../../redux/actions';

import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import Title from '../../components/atoms/Title';
import Text from '../../components/atoms/Text';
import RoundedImage from '../../components/atoms/RoundedImage';
import Spacer from '../../components/atoms/Spacer';
import DoubleCell from '../../components/molecules/DoubleCell/DoubleCell';
import Button from '../../components/atoms/Button';

const ProjectDetail = (props) => {
  const project = props.projects.find((project) => project._id === props.match.params.id);
  const { name, mainImage, description, _id } = project;

  const handleDelete = (e) => {
    props.deleteProjectRequest({ id: _id });
    props.history.push('/projects');
  };

  return (
    <MainLayout>
      <Title>{name}</Title>
      <Spacer size='s' />
      <RoundedImage src={mainImage} alt={name} />
      <Spacer size='s' />
      <Text>{description}</Text>
      <DoubleCell
        second={
          <DoubleCell
            first={
              <Button color='red' onClick={handleDelete}>
                Delete Project
              </Button>
            }
            second={
              <Link to={`/projects/${_id}/edit`}>
                <Button color='blue'>Edit Project</Button>
              </Link>
            }
          />
        }
      />
    </MainLayout>
  );
};

const mapState = (state) => ({
  projects: state.projects,
});

const mapDispatch = {
  deleteProjectRequest,
};

export default connect(mapState, mapDispatch)(ProjectDetail);
