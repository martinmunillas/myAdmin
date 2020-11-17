import toDoSchema from './schema';

const getToDos = async () => {
  return await (await toDoSchema.find()).reverse();
};

const saveToDo = async (toDo) => {
  const date = new Date()
  return await new toDoSchema({...toDo, date}).save();
};

const deleteToDo = async (id) => {
  return await toDoSchema.deleteOne({ _id: id });
};

export default {
  getToDos,
  saveToDo,
  deleteToDo,
};
