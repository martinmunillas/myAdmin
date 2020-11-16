import { connect } from 'react-redux';
import React from 'react';

import Title from '../components/atoms/Title';
import NewToDoCard from '../components/organisms/NewToDoCard/NewToDoCard';
import ToDoCard from '../components/organisms/ToDoCard/ToDoCard';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Messages = ({ toDos }) => {
  return (
    <MainLayout>
      <Title>ToDo</Title>
      <ul>
        <NewToDoCard />
        {toDos.map((toDo, i) => (
          <ToDoCard {...toDo} key={i} />
        ))}
      </ul>
    </MainLayout>
  );
};

const mapState = (state) => ({
  toDos: state.toDos,
});

export default connect(mapState, null)(Messages);
