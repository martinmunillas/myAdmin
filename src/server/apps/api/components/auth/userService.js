import bcrypt from 'bcryptjs';

import projectSchema from './userSchema';

const getUser = async (email) => {
  return await projectSchema.findOne({ email });
};

const getUsers = async () => {
  return await projectSchema.find();
};

const createUser = async ({ password, name, email }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await new projectSchema({
    name,
    email,
    password: hashedPassword,
  }).save();
};

export default {
  getUser,
  getUsers,
  createUser,
};
