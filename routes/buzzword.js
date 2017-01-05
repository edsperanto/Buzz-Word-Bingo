const qs = require('querystring');
const express = require('express');
const my = require('./../public/my.js');
let router = express.Router();

router.post('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	if(typeof req.body.buzzWord === 'string' && typeof req.body.score === 'number') {
		req.body['heard'] = false;
		my.buzzWords.push(req.body);
		res.send(`{ "success": true }`);
		res.end();
	}else{
		res.send(`{ "success": false }`);
		res.end();
	}
});

router.put('/', function(req, res, next) {

});

module.exports = router;