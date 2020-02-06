import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: { type: [String] },
  currentStage: { type: String },
  lowercase_name: { type: String },
});

const Project = mongoose.model('proyectos', ProjectSchema);

export const ProjectFunctions = {
  getAll: async () => {
    try {
      const projectData = await Project.find();
      return projectData;
    } catch (err) {
      throw Error(err);
    }
  },
  getByName: async (name: string) => {
    try {
      const projectData = await Project.findOne({ name: name });
      return projectData;
    } catch (error) {
      throw Error(error);
    }
  },
  getByStage: async (stage: string) => {
    try {
      const projects = await Project.find({ currentStage: stage });
      return projects;
    } catch (error) {
      throw Error(error);
    }
  },
};
