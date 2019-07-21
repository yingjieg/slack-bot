'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
  };
  return Messages;
};