const authorBusiness = require('./author-business.js');
const { authorSchema } = require('./author-schema.js');

const listAuthors = async (req, h) => {
  try {
    const authors = await authorBusiness.listAllAuthors();
    h.response(authors).code(200);
  } catch (err) {
    h.response({ message: err.message }).code(500);
  }
};

const getAuthor = async (req, h) => {
  try {
    const author = await authorBusiness.getAuthorDetails(req.params.id);
    if (author) {
      h.response(author).code(200);
    } else {
      h.response({ message: 'Author not found' }).code(404);
    }
  } catch (err) {
    h.response({ message: err.message }).code(500);
  }
};

const addAuthor = async (req, h) => {
  const { error } = authorSchema.validate(req.body);
  if (error) {
    return h.code(400).response({ message: error.details[0].message });
  }

  try {
    const author = await authorBusiness.addNewAuthor(req.body);
    h.code(201).response(author);
  } catch (err) {
    h.code(500).response({ message: err.message });
  }
};

const deleteAuthor = async (req, h) => {
  try {
    await authorBusiness.removeAuthor(req.params.id);
    h.response({ message: 'Author deleted' });
  } catch (err) {
    h.code(400).response({ message: err.message });
  }
};

module.exports = {
  listAuthors,
  getAuthor,
  addAuthor,
  deleteAuthor,
};
