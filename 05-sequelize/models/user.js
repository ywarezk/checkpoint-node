'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,

      }
    },
    hashedPassword: DataTypes.STRING
  }, {
    validate: {

      // myCustomValidate: function(next) {
      //   setTimeout(() => {
      //     const task = require('./task').task;
      //     // throw new Validation...
      //     next();
      //   }, 1000)
        
      // }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
    // getTasks
    // setTasks
    models.user.hasMany(models.task);
    
  };
  return user;
};