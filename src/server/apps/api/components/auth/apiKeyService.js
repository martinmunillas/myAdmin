import projectSchema from './apiKeySchema';

const getApiKey = async (token) => {
  return await projectSchema.findOne({ token });
};

export default {
  getApiKey,
};
