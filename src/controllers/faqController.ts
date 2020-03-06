import { FaqsFunctions } from '../models';
import { RequestHandler } from 'express';

export const GetAllFaqs: RequestHandler = async (_, res) => {
  try {
    const programs = await FaqsFunctions.getAll();
    res.status(200).json(programs);
  } catch (error) {}
};

export const GetFaqByName: RequestHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const faq = await FaqsFunctions.getByName(nombre);
    res.status(200).json(faq);
  } catch (error) {
    res.status(404).send('Not found');
  }
};

export const GetFaqByQuestion: RequestHandler = async (req, res) => {
  try {
    const { pregunta } = req.query;
    const group = await FaqsFunctions.getByQuestion(pregunta);
    res.status(200).json(group);
  } catch (error) {
    res.status(404).send('Not found');
  }
};

export const getFaq: RequestHandler = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const faq = await FaqsFunctions.getById(id);
      return res.status(200).json(faq);
    }
  } catch (error) {
    res.status(404).send('Not found');
  }
};
