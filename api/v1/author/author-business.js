const authorRepository = require('./author-repository.js');

const listAllAuthors = () => authorRepository.getAllAuthors();
const getAuthorDetails = (id) => authorRepository.getAuthorById(id);
const addNewAuthor = (author) => authorRepository.createAuthor(author);
const removeAuthor = (id) => authorRepository.deleteAuthor(id);

module.exports = {
  listAllAuthors,
  getAuthorDetails,
  addNewAuthor,
  removeAuthor,
};
