import { GroupFunctions } from '../models';
import { RequestHandler } from 'express';

export const GetAllGroups: RequestHandler = async (_, res) => {
  try {
    const groups = await GroupFunctions.getAll();
    res.status(200).json(groups);
  } catch (error) {}
};

export const GetGroupByName: RequestHandler = async (req, res) => {
  try {
    const { name } = req.params;
    const group = await GroupFunctions.getByName(name);
    res.status(200).json(group);
  } catch (error) {
    res.status(404).send('Not found');
  }
};
