import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const GroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: { type: [String] },
});

const Group = mongoose.model('grupos', GroupSchema);

export const GroupFunctions = {
  getAll: async () => {
    try {
      const groupData = await Group.find();
      return groupData;
    } catch (err) {
      throw Error(err);
    }
  },
  getByName: async (name: string) => {
    try {
      const groupData = await Group.find({ name: name });
      return groupData;
    } catch (error) {
      throw Error(error);
    }
  },
};
