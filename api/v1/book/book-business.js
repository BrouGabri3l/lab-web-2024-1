const Book = require('./book-model.js');

const getAllBooks = () => {
  return Book.findAll({ include: 'author' });
};

const getBookById = (id) => {
  return Book.findByPk(id, { include: 'author' });
};

const createBook = (bookData) => {
  return Book.create(bookData);
};

const deleteBookById = (id) => {
  return Book.destroy({ where: { id } });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
};
