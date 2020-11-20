import messageSchema from './schema';

const getMessages = async () => {
  return await (await messageSchema.find()).reverse();
};

const sendMessage = async (project) => {
  const date = new Date();
  return await new messageSchema({ ...project, date, isRead: false }).save();
};

const readMessage = async (id) => {
  return await messageSchema.updateOne({ _id: id }, { isRead: true });
};

const unreadMessage = async (id) => {
  return await messageSchema.updateOne({ _id: id }, { isRead: false });
};

const deleteMessage = async (id) => {
  return await messageSchema.deleteOne({ _id: id });
};

export default {
  getMessages,
  sendMessage,
  readMessage,
  unreadMessage,
  deleteMessage,
};
