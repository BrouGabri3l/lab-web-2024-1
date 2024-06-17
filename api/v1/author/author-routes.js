const {
  listAuthors,
  addAuthor,
  getAuthor,
  deleteAuthor,
} = require('./author-controller.js');
const schema = require('./author-schema.js');

const plugin = {
  name: 'author-v1-route',
  version: '1',
  register: (server) => {
    server.route([
      {
        method: 'GET',
        path: '/v1/authors',
        options: {
          tags: ['api'],
          description: 'List of authors',
          handler: listAuthors,
          validate: schema.listAuthors,
        },
      },
      {
        method: 'GET',
        path: '/v1/authors/{id}',
        options: {
          tags: ['api'],
          description: 'Get author by ID',
          handler: getAuthor,
          validate: schema.getAuthorById,
        },
      },
      {
        method: 'POST',
        path: '/v1/authors',
        options: {
          tags: ['api'],
          handler: addAuthor,
          validate: schema.addAuthorAuthor,
        },
      },
      {
        method: 'DELETE',
        path: '/v1/authors/{id}',
        options: {
          tags: ['api'],
          handler: deleteAuthor,
          validate: schema.deleteAuthorById,
        },
      },
    ]);
  },
};

module.exports = plugin;
