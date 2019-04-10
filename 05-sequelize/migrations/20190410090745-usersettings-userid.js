'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // add a column to the userSettings table
    return queryInterface.addColumn(
      'userSettings',
      'userId',
      {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'user',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('userSettings', 'userId');
  }
};
