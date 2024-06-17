const {
  getBooks,
  create,
  findById,
  deleteById,
} = require('./book-controller.js');
const schema = require('./book-schema.js');

const plugin = {
  name: 'book-v1-route',
  version: '1',
  register: (server) => {
    server.route([
      {
        method: 'GET',
        path: '/v1/books',
        options: {
          tags: ['api'],
          description: 'List of books',
          handler: getBooks,
          validate: schema.getBooks,
        },
      },
      {
        method: 'GET',
        path: '/v1/books/{id}',
        options: {
          tags: ['api'],
          description: 'Get book by ID',
          handler: findById,
          validate: schema.getBookById,
        },
      },
      {
        method: 'POST',
        path: '/v1/books',
        options: {
          tags: ['api'],
          handler: create,
          validate: schema.createBook,
        },
      },
      {
        method: 'DELETE',
        path: '/v1/books/{id}',
        options: {
          tags: ['api'],
          handler: deleteById,
          validate: schema.deleteBookById,
        },
      },
    ]);
  },
};

module.exports = plugin;
