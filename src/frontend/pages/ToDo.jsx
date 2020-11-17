import { connect } from 'react-redux';
import React from 'react';

import Title from '../components/atoms/Title';
import NewToDoCard from '../components/organisms/NewToDoCard/NewToDoCard';
import ToDoCard from '../components/organisms/ToDoCard/ToDoCard';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const ToDo = ({ toDos }) => {
  return (
    <MainLayout>
      <Title>ToDo</Title>
      <ul>
        <NewToDoCard />
        {toDos.map((toDo) => (
          <ToDoCard {...toDo} key={toDo._id} />
        ))}
      </ul>
    </MainLayout>
  );
};

const mapState = (state) => ({
  toDos: state.toDos,
});

export default connect(mapState, null)(ToDo);
