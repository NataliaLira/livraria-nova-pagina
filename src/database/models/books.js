const db = require("../index");
const { DataTypes } = require("sequelize");

const Books = db.define(
  "Books",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    edition_year: {
      type: DataTypes.INTEGER
    },
    author: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    stock: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "books",
  }
);

module.exports = Books;
