'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voiture = sequelize.define('Voiture', {
    name: DataTypes.STRING,
    engine: DataTypes.STRING,
    color: DataTypes.STRING,
    model: DataTypes.STRING,
    fuel: DataTypes.STRING
  }, {});
  Voiture.associate = function(models) {
    // associations can be defined here
  };
  return Voiture;
};