'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Books', 
      { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        edition_year: {
          type: Sequelize.INTEGER
        },
        author: {
          type: Sequelize.STRING
        },
        pages: {
          type: Sequelize.INTEGER
        },
        stock: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
       }
      );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
