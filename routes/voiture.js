var express = require('express');
var router = express.Router();

/* GET voiture listing. */
router.get('/', function(req, res, next) {
	res.render('voitures/index', {
  		title: 'Voitures', 
  		name: 'Emilien'
    });
});

router.get('/1/view', function(req, res, next) {
	res.render('voitures/view', {
		
	})
});

module.exports = router;
