import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/atoms/Button';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import IdeaCard from '../components/organisms/IdeaCard/IdeaCard';

import { newIdea } from '../redux/actions';

const Ideas = (props) => {
  const handleNewIdea = () => {
    props.newIdea();
  };

  return (
    <MainLayout>
      <Title color='blue'>Ideas</Title>
      <Button color='blue' onClick={handleNewIdea}>
        New Idea
      </Button>
      {props.ideas.map((idea) => (
        <IdeaCard {...idea} />
      ))}
    </MainLayout>
  );
};

const mapState = (state) => ({
  ideas: state.ideas,
});

const mapDispatch = {
  newIdea,
};

export default connect(mapState, mapDispatch)(Ideas);
