import mongoose, { Schema } from 'mongoose';

const FAQSchema = new Schema({
  nombre: String,
  pregunta: String,
  respuesta: String,
  id: String,
});

const FAQ = mongoose.model('faqs', FAQSchema);

export const FaqsFunctions = {
  getAll: async () => {
    try {
      const allFaqs = await FAQ.find();
      return allFaqs;
    } catch (error) {
      throw Error(error);
    }
  },
  getByName: async (name: string) => {
    try {
      const faq = await FAQ.findOne({ nombre: name });
      return faq;
    } catch (error) {
      throw Error(error);
    }
  },
  getByQuestion: async (question: string) => {
    try {
      const faq = await FAQ.findOne({ pregunta: question });
      return faq;
    } catch (error) {
      throw Error(error);
    }
  },
  getById: async (id: string) => {
    try {
      const faq = await FAQ.find({ id: id });
      return faq;
    } catch (error) {
      throw Error(error);
    }
  },
};
