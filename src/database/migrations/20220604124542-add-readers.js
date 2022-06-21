'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn(
        'Readers',
        'membership',
        {
          type: Sequelize.BOOLEAN
        }
      )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Readers', 'membership')
  }
};
