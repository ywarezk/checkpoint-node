'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    title: DataTypes.STRING,
    when: DataTypes.DATE
  }, {});
  task.associate = function(models) {
    // associations can be defined here
    // setTags([])
    models.task.belongsToMany(models.tag, {through: models.tagTask});
  };
  return task;
};