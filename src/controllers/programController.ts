import { ProgramFunctions } from '../models';
import { RequestHandler } from 'express';

export const GetAllPrograms: RequestHandler = async (_, res) => {
  try {
    const programs = await ProgramFunctions.getAll();
    res.status(200).json(programs);
  } catch (error) {}
};

export const GetProgramByName: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const group = await ProgramFunctions.getByName(name);
    res.status(200).json(group);
  } catch (error) {
    res.status(404).send('Not found');
  }
};
