import messageSchema from './schema';

const getMessages = async () => {
  return await messageSchema.find();
};

const sendMessage = async (project) => {
  const date = new Date()
  return await new messageSchema({...project, date}).save();
};

const deleteMessage = async (id) => {
  return await messageSchema.deleteOne({ _id: id });
};

export default {
  getMessages,
  sendMessage,
  deleteMessage,
};
