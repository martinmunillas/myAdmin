import infoSchema from './schema';

const getInfo = async () => {
  return (await infoSchema.find())[0];
};

const postInfo = async (info) => {
  if ((await infoSchema.find()).length > 0) {
    return new Error('Info already exists');
  }
  return await new infoSchema(info).save();
};

const setInfo = async (update) => {
  return await infoSchema.updateOne({}, update);
};

export default {
  getInfo,
  postInfo,
  setInfo,
};
