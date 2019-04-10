'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tasks',
      'userId',
      {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'user',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('tasks', 'userId');
  }
};
