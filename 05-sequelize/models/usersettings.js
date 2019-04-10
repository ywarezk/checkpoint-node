'use strict';
module.exports = (sequelize, DataTypes) => {
  const userSettings = sequelize.define('userSettings', {
    isMails: DataTypes.BOOLEAN
  }, {});
  userSettings.associate = function(models) {
    // associations can be defined here
    models.userSettings.belongsTo(models.user);
  };
  return userSettings;
};