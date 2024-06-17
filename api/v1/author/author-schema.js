const Joi = require('joi');

const getAuthors = {
  query: Joi.object({
    name: Joi.string(),
  }),
};

const getAuthorById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const createAuthor = {
  payload: Joi.object({
    name: Joi.string().required(),
    birthdate: Joi.date().required(),
  }),
};

const deleteAuthorById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  deleteAuthorById,
};
