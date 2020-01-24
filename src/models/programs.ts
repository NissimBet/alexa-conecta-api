import mongoose, { Schema } from 'mongoose';

const ProgramSchema = new Schema({
  name: String,
  description: String,
});

const Program = mongoose.model('programas', ProgramSchema);

export const ProgramFunctions = {
  getAll: async () => {
    try {
      const programData = await Program.find();
      return programData;
    } catch (error) {
      throw Error(error);
    }
  },
  getByName: async (name: string) => {
    try {
      const programData = await Program.findOne({ name: name });
      return programData;
    } catch (error) {
      throw Error(error);
    }
  },
};
