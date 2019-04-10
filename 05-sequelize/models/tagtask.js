'use strict';
module.exports = (sequelize, DataTypes) => {
  const tagTask = sequelize.define('tagTask', {
    tagId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {});
  tagTask.associate = function(models) {
    // associations can be defined here
  };
  return tagTask;
};