const Author = require('./author-model.js');

const getAllAuthors = () => Author.findAll({ include: 'books' });
const getAuthorById = (id) => Author.findByPk(id, { include: 'books' });
const createAuthor = (author) => Author.create(author);

const deleteAuthor = async (id) => {
  const author = await Author.findByPk(id, { include: 'books' });
  if (author && author.books.length > 0) {
    throw new Error(
      'Cannot delete author as they are associated with one or more books.'
    );
  }
  return Author.destroy({ where: { id } });
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  deleteAuthor,
};
