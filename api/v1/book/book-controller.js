const bookBusiness = require('./book-business.js');
const bookSchema = require('./book-schema.js');

const getBooks = async (req, h) => {
  try {
    const books = await bookBusiness.listAllBooks();
    h.response(books);
  } catch (err) {
    h.code(500).response({ message: err.message });
  }
};

const findById = async (req, h) => {
  try {
    const book = await bookBusiness.getBookDetails(req.params.id);
    if (book) {
      h.response(book);
    } else {
      h.code(404).response({ message: 'Book not found' });
    }
  } catch (err) {
    h.code(500).response({ message: err.message });
  }
};

const create = async (req, h) => {
  const { error } = bookSchema.createBook.validate(req.body);
  if (error) {
    return h.code(400).response({ message: error.details[0].message });
  }

  try {
    const book = await bookBusiness.addNewBook(req.body);
    h.code(201).response(book);
  } catch (err) {
    h.code(500).response({ message: err.message });
  }
};

const deleteById = async (req, h) => {
  try {
    await bookBusiness.removeBook(req.params.id);
    h.response({ message: 'Book deleted' });
  } catch (err) {
    h.code(500).response({ message: err.message });
  }
};

module.exports = {
  getBooks,
  findById,
  create,
  deleteById,
};
