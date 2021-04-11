import ideasSchems from './schema';

const getIdeas = async () => {
  return await (await ideasSchems.find()).reverse();
};

const keepIdea = async (idea) => {
  return await new ideasSchems(idea).save();
};

const upgradeIdea = async (idea, id) => {
  return await ideasSchems.updateOne({ _id: id }, idea);
};

const deleteIdea = async (id) => {
  return await ideasSchems.deleteOne({ _id: id });
};

export default {
  getIdeas,
  keepIdea,
  upgradeIdea,
  deleteIdea,
};
