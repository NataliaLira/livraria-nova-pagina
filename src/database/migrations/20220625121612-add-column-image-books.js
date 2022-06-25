'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'books',
      'image',
      {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'books',
      'image'
    )
  }
};
