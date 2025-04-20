const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: DataTypes.STRING,
  language: DataTypes.STRING,
  coverImage: DataTypes.STRING,
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Book;
