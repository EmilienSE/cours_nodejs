const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
	models
		.Voiture
		.findAll({
			limit: 10,
			include: ['brand']
		}).then(cars => {
			console.log(cars);
			res.render('voitures/index', {
				cars: cars
			});
		})
	;
});

router.get('/:id/view', function(req, res, next) {
	models
		.Voiture
		.findOne({
			where: {id: req.params.id},
			include: ['brand']
		}).then(car => {
			console.log(car);
			res.render('voitures/view', {
				car: car
			});
		})
	;
});

router.get('/brand/add', function(req, res, next){
	res.render('voitures/brand/add');
});

router.post('/brand/add/ok', function(req, res){
	models
		.Brand
		.create({
			name: req.body.marque,
			createdAt: '2018-12-12 08:40:19',
			updatedAt: '2018-12-12 14:30:38'
	});
	res.redirect('/');
});

router.get('/add', function(req, res){
	models
		.Brand
		.findAll()
		.then(brand => {
			console.log(brand);
			res.render('voitures/add', {
				brand : brand
			});
		});
});

router.post('/add/ok', function(req, res){
	models
		.Voiture
		.create({
			name: req.body.name,
			engine: req.body.engine,
			color: req.body.color,
			model: req.body.model,
			fuel: req.body.fuel,
			createdAt: '2018-12-12 08:40:19',
			updatedAt: '2018-12-12 14:30:38',
			brandId: req.body.brandId,
	});
	res.redirect('/');
});


router.get('/:id/edit', function(req, res){
	models
		.Voiture
		.findOne({
			where: {id: req.params.id},
			include: ['brand']
		})
		.then(car => {
			models
				.Brand
				.findAll()
				.then(brand => {
					res.render('voitures/edit', {
						car: car,
						brands: brand
					});
				})
		});
});

router.post('/:id/edit/ok', function(req, res){
	models
		.Voiture
		.update({
			name: req.body.name,
			engine: req.body.engine,
			color: req.body.color,
			model: req.body.model,
			fuel: req.body.fuel,
			createdAt: '2018-12-12 08:40:19',
			updatedAt: '2018-12-12 14:30:38',
			brandId: req.body.brandId,
		},
		{
			where: {id: req.params.id},
		});
		res.redirect('/');
});

router.get('/:id/delete', function(req, res){
	models
		.Voiture
		.destroy({
			where: {id: req.params.id}
	});
	res.redirect('/voiture/');
});

module.exports = router;