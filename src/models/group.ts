import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;
/* 
export type GroupDocument = mongoose.Document & {
  name: String;
  category: Category;
};

type SubCategory = {
  name: String;
};

type Category = {
  name: String;
  subcategories: SubCategory[];
};
 */
const GroupSchema = new Schema({
  name: { type: String, required: true },
  //category: Object,
});

// const Group = mongoose.model<GroupDocument>('Group', GroupSchema);
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
