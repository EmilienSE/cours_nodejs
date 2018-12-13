'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Voitures',
      'brandId',
      {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'Brands',
          key: 'id'
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Voitures', 
      'brandId'
    );
  }
};