'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    title: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here

    // setTasks([])
    models.tag.belongsToMany(models.task, {through: models.tagTask});
  };
  return tag;
};