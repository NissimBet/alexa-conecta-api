import { ProjectFunctions } from '../models';
import { RequestHandler } from 'express';

export const GetAllProjects: RequestHandler = async (_, res) => {
  try {
    const projects = await ProjectFunctions.getAll();
    res.status(200).json(projects);
  } catch (error) {}
};

export const GetProjectByName: RequestHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const project = await ProjectFunctions.getByName(name.charAt(0).toUppercase() + name.slice(1));
    res.status(200).json(project);
  } catch (error) {
    res.status(404).send('Not found');
  }
};

export const GetProjectsByStage: RequestHandler = async (req, res) => {
  try {
    const { stage } = req.query;
    const projects = await ProjectFunctions.getByStage(stage);
    res.status(200).json(projects);
  } catch (error) {}
};
