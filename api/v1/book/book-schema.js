const Joi = require('joi');

const getBooks = {
  query: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
  }),
};

const getBookById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const createBook = {
  payload: Joi.object({
    title: Joi.string().required(),
    authorId: Joi.number().integer().required(),
    publishedDate: Joi.date().required(),
  }),
};

const deleteBookById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  deleteBookById,
};
