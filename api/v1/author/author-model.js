module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
  });

  Author.associate = (models) => {
    Author.hasMany(models.Book, {
      foreignKey: 'authorId',
      as: 'books',
    });
  };

  return Author;
};
