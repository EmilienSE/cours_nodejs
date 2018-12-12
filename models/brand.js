'use strict';
module.exports = (sequelize, DataTypes) => {
	const Brand = sequelize.define('Brand', {
		name: DataTypes.STRING
	}, {});
	
	Brand.associate = function(models) {
		models.Brand.hasMany(models.Voiture);
	};
	return Brand;
};