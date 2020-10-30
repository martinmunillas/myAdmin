import projectSchema from './schema';

const getProjects = async () => {
  return await projectSchema.find();
};

const addProject = async (project) => {
  return await new projectSchema(project).save();
};

const updateProject = async (id, update) => {
  return await projectSchema.updateOne({ _id: id }, update);
};

const deleteProject = async (id) => {
  return await projectSchema.deleteOne({ _id: id });
};

export default {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};
